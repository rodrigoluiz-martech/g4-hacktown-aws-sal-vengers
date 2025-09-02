// Store em memória para formulários
class FormsStore {
  constructor() {
    this.forms = new Map();
    this.submissions = new Map();
    this.initializeDefaultForm();
  }

  initializeDefaultForm() {
    const defaultForm = {
      slug: "product/gestao-estrategia",
      steps: 3,
      product: "Gestão e estratégia",
      fields: [
        {
          name: "phone",
          label: "Qual é o seu WhatsApp?",
          type: "text",
          required: true,
          mask: "+55 (99) 99999-9999",
          placeholder: "insira o telefone",
          validations: [{
            type: "minLength",
            value: 10,
            message: "O telefone deve ter no mínimo 10 caracteres"
          }],
          step: 1
        },
        {
          name: "name",
          label: "Qual é o seu nome completo?",
          type: "text",
          required: true,
          placeholder: "insira o nome",
          validations: [{
            type: "minLength",
            value: 3,
            message: "O nome deve ter no mínimo 3 caracteres"
          }],
          step: 1
        },
        {
          name: "email",
          label: "Qual é o seu email?",
          type: "email",
          required: true,
          placeholder: "insira o email",
          validations: [{
            type: "email",
            message: "O email deve ser válido"
          }],
          step: 2
        },
        {
          name: "faixa_faturamento",
          label: "E qual o faturamento anual da sua empresa?",
          type: "select",
          multiselect: false,
          required: true,
          options: [
            { value: "0", label: "Ainda não faturamos" },
            { value: "<500k", label: "Até R$500 mil ao ano" },
            { value: "500k-1m", label: "De R$500 mil a R$1 milhão ao ano" },
            { value: ">1m", label: "Acima de R$1 milhão ao ano" }
          ],
          step: 2
        },
        {
          name: "cargo",
          label: "Qual o seu cargo na empresa?",
          type: "select",
          required: true,
          options: [
            { value: "analista", label: "Analista" },
            { value: "supervisor", label: "Supervisor" },
            { value: "coordenador", label: "Coordenador" },
            { value: "gerente", label: "Gerente" },
            { value: "diretor", label: "Diretor" },
            { value: "vice-presidente", label: "Vice-presidente ou C-Level" },
            { value: "presidente", label: "Presidente ou CEO" },
            { value: "socio", label: "Sócio ou Fundador" }
          ],
          step: 2
        },
        {
          name: "colaboradores",
          label: "Quantos colaboradores a sua empresa possui?",
          type: "radio",
          required: true,
          options: [
            { value: "ate-10", label: "Até 10 colaboradores" },
            { value: "10-50", label: "De 10 a 50 colaboradores" },
            { value: "51-100", label: "De 51 a 100 colaboradores" },
            { value: "101-1000", label: "De 101 a 1.000 colaboradores" },
            { value: "acima-1000", label: "Acima de 1.000 colaboradores" }
          ],
          step: 3
        }
      ]
    };

    // Segundo formulário de exemplo
    const secondForm = {
      slug: "product/formacao-ia",
      steps: 2,
      product: "G4 Formação em IA",
      fields: [
        {
          name: "name",
          label: "Nome",
          type: "text",
          required: true,
          placeholder: "insira o nome",
          validations: [{
            type: "minLength",
            value: 3,
            message: "O nome deve ter no mínimo 3 caracteres"
          }],
          step: 1
        },
        {
          name: "email",
          label: "Email",
          type: "email",
          required: true,
          placeholder: "insira o email",
          validations: [{
            type: "email",
            message: "O email deve ser válido"
          }],
          step: 1
        },
        {
          name: "experiencia_ia",
          label: "Qual sua experiência com IA?",
          type: "radio",
          required: true,
          options: [
            { value: "iniciante", label: "Iniciante" },
            { value: "intermediario", label: "Intermediário" },
            { value: "avancado", label: "Avançado" }
          ],
          step: 2
        }
      ]
    };

    this.forms.set(defaultForm.slug, defaultForm);
    this.forms.set(secondForm.slug, secondForm);

    // Adicionar algumas submissões de exemplo
    this.submitForm(defaultForm.slug, {
      phone: "+55 (11) 99999-9999",
      name: "João Silva",
      email: "joao@email.com",
      faixa_faturamento: "500k-1m",
      cargo: "gerente",
      colaboradores: "10-50"
    });

    this.submitForm(secondForm.slug, {
      name: "Maria Santos",
      email: "maria@email.com",
      experiencia_ia: "intermediario"
    });
  }

  getAllForms() {
    return Array.from(this.forms.values());
  }

  getFormBySlug(slug) {
    return this.forms.get(slug);
  }

  createForm(formData) {
    const id = Date.now().toString();
    const form = {
      id,
      ...formData,
      createdAt: new Date().toISOString()
    };
    this.forms.set(formData.slug, form);
    return form;
  }

  updateForm(slug, formData) {
    const existingForm = this.forms.get(slug);
    if (existingForm) {
      const updatedForm = {
        ...existingForm,
        ...formData,
        updatedAt: new Date().toISOString()
      };
      this.forms.set(slug, updatedForm);
      return updatedForm;
    }
    return null;
  }

  deleteForm(slug) {
    return this.forms.delete(slug);
  }

  submitForm(slug, data) {
    const submissionId = Date.now().toString() + Math.random().toString(36).substr(2, 9);
    const submission = {
      id: submissionId,
      formSlug: slug,
      data,
      submittedAt: new Date().toISOString()
    };
    
    if (!this.submissions.has(slug)) {
      this.submissions.set(slug, []);
    }
    this.submissions.get(slug).push(submission);
    return submission;
  }

  getFormSubmissions(slug) {
    return this.submissions.get(slug) || [];
  }

  getStats() {
    const totalForms = this.forms.size;
    const totalSubmissions = Array.from(this.submissions.values())
      .reduce((acc, submissions) => acc + submissions.length, 0);
    
    return {
      totalForms,
      totalSubmissions,
      avgSubmissionsPerForm: totalForms > 0 ? (totalSubmissions / totalForms).toFixed(1) : 0
    };
  }
}

export const formsStore = new FormsStore();