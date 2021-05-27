## 💻 Sobre o projeto


## 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

- [Node.js][nodejs]
- [React][reactjs]
- [TypeScript][typescript]
- [TypeScript][typescript]
- [ChakraUI][chakraui]


## 🚀 Como rodar este projeto

### Pré-requisitos

```bash 
Caso banco não tenha o módulo para gerar uuid : 
CREATE EXTENSION IF NOT EXISTS "uuid-ossp"
```

```bash 
query para adicionar tipos de telefone 

insert into telefone_tipo(tipo, whatsapp) values('celular', true), ('telefone fixo', false);
```

### Banco de dados

Para configurar o banco basta mmudar as configurações no arquivo ormconfig.json


### 🎲 Rodando o Back End (servidor)

```bash
# Clone este repositório
$ git clone 

# Acesse a pasta do projeto no terminal/cmd
$ cd Gam-Nodejs-Reactjs

# Vá para a pasta server
$ cd api

# Instale as dependências
$ npm install 

# Execute a aplicação em modo de desenvolvimento
$ npm run dev:server

# O servidor inciará na porta:3333 - acesse http://localhost:3333 
```

### 🧭 Rodando a aplicação web (Front End)

```bash
# Clone este repositório
$ git clone 

# Acesse a pasta do projeto no seu terminal/cmd
$ cd Gam-Nodejs-Reactjs

# Vá para a pasta da aplicação Front End
$ cd web

# Instale as dependências
$ npm install

# Execute a aplicação em modo de desenvolvimento
$ npm start

# A aplicação será aberta na porta:3000 - acesse http://localhost:3000
```




