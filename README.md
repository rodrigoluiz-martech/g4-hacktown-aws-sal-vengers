# G4 Hacktown AWS Sal-vengers - Plataforma de Formulários

## Descrição
Sistema completo de criação e gerenciamento de formulários dinâmicos com área administrativa.

## Funcionalidades

### 🏠 Página Principal
- Lista de formulários disponíveis
- Links para área administrativa
- Acesso ao formulário original (hardcoded)

### 📝 Formulários Dinâmicos
- Formulários multi-step configuráveis
- Validação de campos em tempo real
- Suporte a diferentes tipos de campo:
  - Text
  - Email
  - Select
  - Radio buttons
- Máscaras de entrada
- Validações customizáveis

### 🔧 Área Administrativa
- **Dashboard**: Estatísticas e métricas dos formulários
- **Gerenciar Formulários**: CRUD completo de formulários
- **Editor Visual**: Interface para criar/editar formulários
- **Respostas**: Visualização e exportação de dados

## Rotas do Sistema

### Públicas
- `/` - Página inicial
- `/form/{slug}` - Formulário dinâmico (ex: `/form/product/gestao-estrategia`)
- `/forms` - Formulário original (hardcoded)

### Administrativas
- `/admin` - Dashboard
- `/admin/forms` - Lista de formulários
- `/admin/forms/new` - Criar formulário
- `/admin/forms/edit/{slug}` - Editar formulário
- `/admin/forms/{slug}/submissions` - Respostas do formulário
- `/admin/submissions` - Todas as respostas

## Como Executar

```bash
cd frontend
npm install
npm run dev
```

## Funcionalidades Implementadas

✅ Sistema de formulários dinâmicos
✅ Área administrativa completa
✅ Dashboard com estatísticas
✅ CRUD de formulários
✅ Editor visual de formulários
✅ Validação de campos
✅ Formulários multi-step
✅ Exportação de dados (CSV)
✅ Roteamento com suporte a slugs complexos
✅ Página 404 personalizada
✅ Store em memória para persistência
✅ Interface responsiva

## Dados de Exemplo

O sistema vem com 2 formulários pré-configurados:
1. **Gestão e Estratégia** (`product/gestao-estrategia`)
2. **Formação em IA** (`product/formacao-ia`)

E algumas submissões de exemplo para demonstração.