# beautystudio-mobile

##### Inicializando projeto
```console
npm init -y
```

##### Instalando dependências
```console
npm install ts-node -D

npm install typescript -D

npm install express
```

##### Criando estrutura do projeto
######Criar na raiz do projeto a pasta 
> src

######Criar os arquivos
> server.js
> routes.js

######Criar as pastas 
> database
> controllers

######Criar o arqruivo dentro da pasta database
> connection.ts

##### Executando projeto pelo terminal
Adicionar no arquivo package.json > scripts
> "dev": "ts-node-dev --transpileOnly --ignore-watch node_modules src/server.ts"

```console
nm run dev
```