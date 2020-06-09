import knex from 'knex';

var connection = knex({
  client: 'mysql',
  version: '8.20',
  connection: {
    host : 'localhost',
    user : 'root',
    password : 'admin',
    database : 'beautystudio'
  }
});

export default connection;