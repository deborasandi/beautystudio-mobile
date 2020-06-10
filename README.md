# beautystudio-mobile
#### Server
##### Inicializando projeto
```console
npm init -y
```

##### Instalando dependências
```console
npm install ts-node -D

npm install typescript -D

npm install express

npm install --save-dev @types/node

npm install knex --save

npm install mysql
```

##### Criando estrutura do projeto
###### Criar na raiz do projeto a pasta 
> src

###### Criar os arquivos
> server.js
> routes.js

###### Criar as pastas 
> database
> controllers

###### Criar o arquivo dentro da pasta database
> connection.ts

##### Configurando base de dados
Na raiz do projeto, criar o arquivo
> knexfile.ts

Adicionar  arquivo package.json > scripts
>"knex:migrate": "knex --knexfile knexfile.ts migrate:latest"

###### Dentro de database, criar a pasta
> migrations

###### Dentro de migrations, criar os arquivos de criação das tabelas
> 0_create_users
> 1_create_services

##### Executando projeto pelo terminal
Adicionar  arquivo package.json > scripts
> "dev": "ts-node-dev --transpileOnly --ignore-watch node_modules src/server.ts"

##### Possíveis problemas com a conexão
Execute the following query in MYSQL Workbench

ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password'

Where root as your user localhost as your URL and password as your password

Then run this query to refresh privileges:

flush privileges;

Try connecting using node after you do so.

If that doesn't work, try it without @'localhost' part.

```console
nm run dev
```

#### Mobile

##### Instalando dependências para autenticar com o google
```console
expo install expo-google-app-auth
```
