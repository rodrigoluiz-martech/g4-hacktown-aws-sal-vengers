import { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import AdminLayout from '../../components/AdminLayout'
import { formsStore } from '../../store/formsStore'

function FormEditor() {
  const location = useLocation()
  const navigate = useNavigate()
  const slug = location.pathname.includes('/edit/') ? location.pathname.split('/edit/')[1] : null
  const isEdit = Boolean(slug)
  
  const [formConfig, setFormConfig] = useState({
    slug: '',
    product: '',
    steps: 1,
    fields: []
  })

  useEffect(() => {
    if (isEdit && slug) {
      const existingForm = formsStore.getFormBySlug(decodeURIComponent(slug))
      if (existingForm) {
        setFormConfig(existingForm)
      }
    }
  }, [isEdit, slug, location.pathname])

  const handleSave = () => {
    if (!formConfig.slug || !formConfig.product) {
      alert('Preencha todos os campos obrigatórios')
      return
    }

    try {
      if (isEdit) {
        formsStore.updateForm(slug, formConfig)
      } else {
        formsStore.createForm(formConfig)
      }
      navigate('/admin/forms')
    } catch (error) {
      alert('Erro ao salvar formulário')
    }
  }

  const addField = () => {
    const newField = {
      name: '',
      label: '',
      type: 'text',
      required: false,
      step: 1,
      placeholder: '',
      validations: []
    }
    setFormConfig(prev => ({
      ...prev,
      fields: [...prev.fields, newField]
    }))
  }

  const updateField = (index, field) => {
    setFormConfig(prev => ({
      ...prev,
      fields: prev.fields.map((f, i) => i === index ? field : f)
    }))
  }

  const removeField = (index) => {
    setFormConfig(prev => ({
      ...prev,
      fields: prev.fields.filter((_, i) => i !== index)
    }))
  }

  return (
    <AdminLayout>
      <div className="mb-6">
        <h1 className="text-white text-2xl font-semibold mb-2">
          {isEdit ? 'Editar Formulário' : 'Novo Formulário'}
        </h1>
        <div className="text-gray-400 text-sm">G4 Educação > Formulários > {isEdit ? 'Editar' : 'Novo'}</div>
      </div>

      <div className="bg-gray-700 rounded-lg p-6">
        <div className="grid grid-cols-2 gap-6 mb-6">
          <div>
            <label className="text-white text-sm mb-2 block">Slug *</label>
            <input
              type="text"
              value={formConfig.slug}
              onChange={(e) => setFormConfig(prev => ({ ...prev, slug: e.target.value }))}
              className="w-full bg-gray-600 text-white px-3 py-2 rounded border border-gray-500"
              placeholder="ex: product/gestao-estrategia"
            />
          </div>
          
          <div>
            <label className="text-white text-sm mb-2 block">Produto *</label>
            <input
              type="text"
              value={formConfig.product}
              onChange={(e) => setFormConfig(prev => ({ ...prev, product: e.target.value }))}
              className="w-full bg-gray-600 text-white px-3 py-2 rounded border border-gray-500"
              placeholder="ex: Gestão e Estratégia"
            />
          </div>
        </div>

        <div className="mb-6">
          <label className="text-white text-sm mb-2 block">Número de Steps</label>
          <input
            type="number"
            min="1"
            max="10"
            value={formConfig.steps}
            onChange={(e) => setFormConfig(prev => ({ ...prev, steps: parseInt(e.target.value) }))}
            className="w-32 bg-gray-600 text-white px-3 py-2 rounded border border-gray-500"
          />
        </div>

        <div className="mb-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-white text-lg font-semibold">Campos do Formulário</h3>
            <button
              onClick={addField}
              className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded"
            >
              + Adicionar Campo
            </button>
          </div>

          <div className="space-y-4">
            {formConfig.fields.map((field, index) => (
              <div key={index} className="bg-gray-600 p-4 rounded border">
                <div className="grid grid-cols-3 gap-4 mb-4">
                  <div>
                    <label className="text-white text-sm mb-1 block">Nome do Campo</label>
                    <input
                      type="text"
                      value={field.name}
                      onChange={(e) => updateField(index, { ...field, name: e.target.value })}
                      className="w-full bg-gray-700 text-white px-3 py-2 rounded"
                      placeholder="ex: email"
                    />
                  </div>
                  
                  <div>
                    <label className="text-white text-sm mb-1 block">Label</label>
                    <input
                      type="text"
                      value={field.label}
                      onChange={(e) => updateField(index, { ...field, label: e.target.value })}
                      className="w-full bg-gray-700 text-white px-3 py-2 rounded"
                      placeholder="ex: Qual é o seu email?"
                    />
                  </div>
                  
                  <div>
                    <label className="text-white text-sm mb-1 block">Tipo</label>
                    <select
                      value={field.type}
                      onChange={(e) => updateField(index, { ...field, type: e.target.value })}
                      className="w-full bg-gray-700 text-white px-3 py-2 rounded"
                    >
                      <option value="text">Text</option>
                      <option value="email">Email</option>
                      <option value="select">Select</option>
                      <option value="radio">Radio</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-4">
                  <div>
                    <label className="text-white text-sm mb-1 block">Step</label>
                    <input
                      type="number"
                      min="1"
                      max={formConfig.steps}
                      value={field.step}
                      onChange={(e) => updateField(index, { ...field, step: parseInt(e.target.value) })}
                      className="w-full bg-gray-700 text-white px-3 py-2 rounded"
                    />
                  </div>
                  
                  <div>
                    <label className="text-white text-sm mb-1 block">Placeholder</label>
                    <input
                      type="text"
                      value={field.placeholder}
                      onChange={(e) => updateField(index, { ...field, placeholder: e.target.value })}
                      className="w-full bg-gray-700 text-white px-3 py-2 rounded"
                    />
                  </div>
                  
                  <div className="flex items-center space-x-4 pt-6">
                    <label className="flex items-center text-white">
                      <input
                        type="checkbox"
                        checked={field.required}
                        onChange={(e) => updateField(index, { ...field, required: e.target.checked })}
                        className="mr-2"
                      />
                      Obrigatório
                    </label>
                    
                    <button
                      onClick={() => removeField(index)}
                      className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-sm"
                    >
                      Remover
                    </button>
                  </div>
                </div>

                {(field.type === 'select' || field.type === 'radio') && (
                  <div>
                    <label className="text-white text-sm mb-2 block">Opções (uma por linha)</label>
                    <textarea
                      value={field.options?.map(opt => `${opt.value}|${opt.label}`).join('\n') || ''}
                      onChange={(e) => {
                        const options = e.target.value.split('\n')
                          .filter(line => line.trim())
                          .map(line => {
                            const [value, label] = line.split('|')
                            return { value: value?.trim() || '', label: label?.trim() || value?.trim() || '' }
                          })
                        updateField(index, { ...field, options })
                      }}
                      className="w-full bg-gray-700 text-white px-3 py-2 rounded h-24"
                      placeholder="valor1|Label 1&#10;valor2|Label 2"
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="flex space-x-4">
          <button
            onClick={handleSave}
            className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded"
          >
            Salvar
          </button>
          
          <button
            onClick={() => navigate('/admin/forms')}
            className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-2 rounded"
          >
            Cancelar
          </button>
        </div>
      </div>
    </AdminLayout>
  )
}

export default FormEditor