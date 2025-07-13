# 📰 Rilix Dashboard – Frontend

Interface administrativa para gestão de **notícias** no sistema Rilix. Criada com **React + Vite**, integra operações de **CRUD** com upload de imagem, visualização em cards e listagem em tabela, com suporte a **modais responsivos**, **validações**, e **feedbacks visuais**.

---

## ✨ Tecnologias utilizadas

- ⚛️ **React 18**
- ⚡ **Vite**
- 💅 **Tailwind CSS + ShadCN (Radix UI)**
- 🔥 **TanStack React Query**
- 🛠 **Zod + React Hook Form** para validação e formulários
- 📦 **Vitest + Testing Library** para testes unitários
- 📸 **TestCafe** para testes end-to-end
- 🍞 **Sonner** para toasts e feedbacks

---

## 📁 Estrutura de pastas

```text
src/
├── components/              # Componentes reutilizáveis (botões, inputs, etc.)
├── pages/
│   └── news/                # Página de listagem, criação e edição de notícias
│       ├── services/        # Serviços de API (get, post, delete)
│       ├── components/      # Componentes específicos da feature
│       └── index.tsx        # Página principal
├── types/                   # Tipagens globais
└── utils/                   # Funções auxiliares


## 🚀 Como rodar o projeto

### 1. Instale as dependências

npm install

### 1. Execute o servidor de desenvolvimento

npm run dev

## 🧪 Testes

### 1. Testes unitários (Vitest)

npm run test

### 1. Testes end-to-end (TestCafe)

npx testcafe chrome tests/news.test.ts

## 🛠 Funcionalidades

Listagem de notícias com tabela e ações de edição/exclusão

Visualização em cards com modal detalhado

Criação de notícia com upload de imagem e formulário validado

Edição da notícia com pré-visualização da imagem existente

Feedbacks com sonner para sucesso/erro

Tabela responsiva com scroll horizontal

Responsividade e acessibilidade garantidas

## 🛠 Executar com Docker

# Build da imagem

docker build -t rilix-dashboard-frontend .

# Execução do container

docker run -p 4173:4173 rilix-dashboard-frontend

A aplicação ficará disponível em: http://localhost:4173
```
