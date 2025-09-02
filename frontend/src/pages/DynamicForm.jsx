import { useState, useEffect } from 'react'
import { useLocation, Link, useNavigate } from 'react-router-dom'
import { formsStore } from '../store/formsStore'

function DynamicForm() {
  const location = useLocation()
  const navigate = useNavigate()
  const slug = location.pathname.replace('/form/', '')
  const [form, setForm] = useState(null)
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({})
  const [errors, setErrors] = useState({})

  useEffect(() => {
    const formConfig = formsStore.getFormBySlug(slug)
    if (!formConfig) {
      navigate('/')
      return
    }
    setForm(formConfig)
  }, [slug, navigate, location.pathname])

  if (!form) return <div>Carregando...</div>

  const currentFields = form.fields.filter(field => field.step === currentStep)
  const totalSteps = form.steps

  const validateField = (field, value) => {
    const fieldErrors = []
    
    if (field.required && (!value || value.trim() === '')) {
      fieldErrors.push(`${field.label} é obrigatório`)
    }

    if (field.validations && value) {
      field.validations.forEach(validation => {
        switch (validation.type) {
          case 'minLength':
            if (value.length < validation.value) {
              fieldErrors.push(validation.message)
            }
            break
          case 'email':
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
            if (!emailRegex.test(value)) {
              fieldErrors.push(validation.message)
            }
            break
        }
      })
    }

    return fieldErrors
  }

  const handleInputChange = (fieldName, value) => {
    setFormData(prev => ({ ...prev, [fieldName]: value }))
    
    // Clear errors for this field
    if (errors[fieldName]) {
      setErrors(prev => ({ ...prev, [fieldName]: [] }))
    }
  }

  const handleNext = () => {
    const stepErrors = {}
    let hasErrors = false

    currentFields.forEach(field => {
      const fieldErrors = validateField(field, formData[field.name])
      if (fieldErrors.length > 0) {
        stepErrors[field.name] = fieldErrors
        hasErrors = true
      }
    })

    if (hasErrors) {
      setErrors(stepErrors)
      return
    }

    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1)
    } else {
      // Submit form
      formsStore.submitForm(slug, formData)
      alert('Formulário enviado com sucesso!')
      navigate('/')
    }
  }

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const renderField = (field) => {
    const value = formData[field.name] || ''
    const fieldErrors = errors[field.name] || []

    switch (field.type) {
      case 'text':
      case 'email':
        return (
          <div key={field.name}>
            <label className="text-white text-sm mb-2 block">
              {field.label} {field.required && <span className="text-red-500">*</span>}
            </label>
            <div className="relative">
              <span className="absolute left-3 top-3 text-gray-400">
                {field.type === 'email' ? '📧' : field.name === 'phone' ? '📱' : '👤'}
              </span>
              <input
                type={field.type}
                value={value}
                onChange={(e) => handleInputChange(field.name, e.target.value)}
                className="w-full bg-gray-700 text-white rounded-lg px-10 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder={field.placeholder}
              />
            </div>
            {fieldErrors.map((error, idx) => (
              <p key={idx} className="text-red-400 text-xs mt-1">{error}</p>
            ))}
          </div>
        )

      case 'select':
        return (
          <div key={field.name}>
            <label className="text-white text-sm mb-2 block">
              {field.label} {field.required && <span className="text-red-500">*</span>}
            </label>
            <select
              value={value}
              onChange={(e) => handleInputChange(field.name, e.target.value)}
              className="w-full bg-gray-700 text-white rounded-lg px-3 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
            >
              <option value="">Selecione uma opção</option>
              {field.options?.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            {fieldErrors.map((error, idx) => (
              <p key={idx} className="text-red-400 text-xs mt-1">{error}</p>
            ))}
          </div>
        )

      case 'radio':
        return (
          <div key={field.name}>
            <label className="text-white text-sm mb-4 block">
              {field.label} {field.required && <span className="text-red-500">*</span>}
            </label>
            <div className="space-y-3">
              {field.options?.map((option) => (
                <label key={option.value} className="flex items-center text-white">
                  <input
                    type="radio"
                    name={field.name}
                    value={option.value}
                    checked={value === option.value}
                    onChange={(e) => handleInputChange(field.name, e.target.value)}
                    className="mr-3"
                  />
                  {option.label}
                </label>
              ))}
            </div>
            {fieldErrors.map((error, idx) => (
              <p key={idx} className="text-red-400 text-xs mt-1">{error}</p>
            ))}
          </div>
        )

      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-slate-800 flex items-center justify-center p-4">
      <div className="bg-gray-800 rounded-lg p-8 max-w-md w-full">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="text-orange-500 text-2xl font-bold mb-2">G4</div>
          <div className="text-white text-sm">EDUCAÇÃO</div>
        </div>

        {/* Título */}
        <h1 className="text-white text-xl font-semibold text-center mb-2">
          {form.product}
        </h1>
        <p className="text-gray-400 text-sm text-center mb-8">
          Olá, Precisamos de algumas informações, para termos certeza qual é o programa mais adequado para o seu perfil.
        </p>

        {/* Progress */}
        <div className="mb-6">
          <div className="text-white text-sm mb-2">Etapa {currentStep} de {totalSteps}</div>
          <div className="w-full bg-gray-700 rounded-full h-2">
            <div 
              className="bg-orange-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${(currentStep / totalSteps) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Form */}
        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          {currentFields.map(renderField)}

          <div className="flex space-x-4">
            {currentStep > 1 && (
              <button
                type="button"
                onClick={handleBack}
                className="flex-1 bg-gray-600 hover:bg-gray-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors"
              >
                ← Voltar
              </button>
            )}
            
            <button
              type="button"
              onClick={handleNext}
              className="flex-1 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-4 rounded-lg transition-colors"
            >
              {currentStep === totalSteps ? 'Finalizar' : 'Próximo →'}
            </button>
          </div>
        </form>

        {/* Terms */}
        <p className="text-gray-400 text-xs text-center mt-4">
          Ao clicar em Confirmar você automaticamente aceita os nossos{' '}
          <span className="text-orange-500">termos de uso</span> e{' '}
          <span className="text-orange-500">política de privacidade</span>.
        </p>

        {/* CTA */}
        <div className="text-center mt-6">
          <p className="text-white font-semibold">
            Preencha até o final e receba um desconto exclusivo !!!
          </p>
        </div>

        {/* Back Link */}
        <div className="mt-6 text-center">
          <Link 
            to="/" 
            className="text-orange-500 hover:text-orange-400 text-sm"
          >
            ← Voltar para Home
          </Link>
        </div>
      </div>
    </div>
  )
}

export default DynamicForm