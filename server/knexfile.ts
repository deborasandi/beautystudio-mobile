import * as path from 'path'

module.exports = {
  development: {
    client: "mysql",
    connection: {
      host : 'localhost',
      user : 'root',
      password : 'admin',
      database : 'beautystudio'
    },
    migrations: {
      directory: path.resolve(__dirname, 'src', 'database', 'migrations')
    },
  },
  production: {
    //client: "mysql",
    //connection: "mysql://root:123456@127.0.0.1:3306/knexdb",
  },
};