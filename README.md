# DevMotors

> Plataforma web para gerenciamento e compartilhamento de informações sobre uma loja mecânica de carros clássicos.

O **DevMotors** é uma aplicação moderna desenvolvida com as últimas tecnologias do **Next.js**, focada em fornecer uma experiência simples e intuitiva para gerenciar informações sobre uma loja mecânica especializada em carros clássicos. O projeto inclui recursos avançados para a criação e gerenciamento de informações, com controle de visibilidade e integração com Cosmic CMS.

## Índice

- [Descrição do Projeto](#descrição-do-projeto)
- [Funcionalidades](#funcionalidades)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Como Usar](#como-usar)
- [Scripts Disponíveis](#scripts-disponíveis)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Futuras Implementações](#futuras-implementações)
- [Contato](#contato)

## Descrição do Projeto

O **DevMotors** permite criar, compartilhar e gerenciar informações sobre uma loja mecânica de carros clássicos de forma prática e segura. Ele oferece:

- Criação e gerenciamento de informações sobre serviços oferecidos.
- Integração com Cosmic CMS para gerenciamento de conteúdo.
- Interface moderna e responsiva para fácil navegação.

## Funcionalidades

- **Gerenciamento de Informações:** Criação, edição e exclusão de dados sobre serviços mecânicos e carros clássicos.
- **Integração com Cosmic CMS:** Armazenamento e recuperação de dados.
- **Interface Moderna:** Navegação responsiva com CSS Modules.

## Tecnologias Utilizadas

- **Next.js:** Framework moderno para construção de aplicações web.
- **Cosmic CMS:** Sistema de gerenciamento de conteúdo.
- **React:** Biblioteca para construção de interfaces de usuário.
- **Sass:** Pré-processador CSS.
- **TypeScript:** Superconjunto de JavaScript que adiciona tipagem estática.

## Como Usar

### 1. Clonar o Repositório

```bash
git clone https://github.com/yurisdevops/devmotors.git
cd devmotors
```

### 2. Instalar Dependências

Com `npm`:

```bash
npm install
```

Com `yarn`:

```bash
yarn install
```

### 3. Configurar o Cosmic CMS

- Crie um projeto no [Cosmic CMS](https://www.cosmicjs.com/).
- Adicione as credenciais no arquivo `.env`:

```env
NEXT_PUBLIC_API_URL=https://api.cosmicjs.com/v3/buckets/seu-projeto
READ_KEY=key-cosmic-do-seu-projeto
NEXT_PUBLIC_URL=https://localhost:3000
```

### 4. Executar o Projeto

Com `npm`:

```bash
npm run dev
```

Com `yarn`:

```bash
yarn dev
```

Acesse a aplicação no navegador: [DevMotors](https://devmotors-zeta.vercel.app).

## Scripts Disponíveis

- **`npm run dev`**: Inicia o servidor de desenvolvimento.
- **`npm run build`**: Gera os arquivos para produção.
- **`npm run start`**: Inicia a aplicação em produção.
- **`npm run lint`**: Executa o linter para verificar erros de código.

## Estrutura do Projeto

- **`DEVMOTORS`**
  - **node_modules** (dependências do projeto)
  - **public**
    - `favicon.ico`
  - **src**
    - **app**
      - **post**
        - **[slug]**
          - `error.module.scss`
          - `error.tsx`
          - `page.tsx`
          - `styles.module.scss`
          - **components**
    - `favicon.ico`
    - `globals.scss`
    - `layout.tsx`
    - `page.tsx`
  - **components** (componentes reutilizáveis)
  - **utils** (funções utilitárias)
  - `.env.local` (variáveis de ambiente)
  - `.gitignore` (arquivos e diretórios a serem ignorados pelo Git)
  - `next-env.d.ts` (tipagens do TypeScript para Next.js)
  - `next.config.ts` (configurações do Next.js)
  - `package-lock.json` (registro de dependências)
  - `package.json` (configurações do projeto e dependências)
  - `README.md` (documentação do projeto)
  - `tsconfig.json` (configurações do TypeScript)

## Futuras Implementações

- **Categorias de Serviços:** Organização dos serviços oferecidos pela loja.
- **Notificações em Tempo Real:** Alertas sobre atualizações de informações.
- **Modo Offline:** Acesso às informações mesmo sem conexão à internet.

## Contato

Desenvolvido por [Yuri Souza](https://github.com/yurisdevops). Entre em contato para dúvidas ou sugestões!

---

### 🚗 **Gerencie suas informações sobre a loja mecânica de carros clássicos de maneira simples e eficiente com o DevMotors!**

---
