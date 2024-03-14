const sql = require('mssql');

//variavel de configuração de conexão ao banco sql server
const config = {
    user:'sa',
    password: 'rqqo231',
    database: 'CINEMA',
    server: 'localhost',
    //parametros que evitam erros de ssl
    options: {
      validateBulkLoadParameters:false,
      encrypt: false,
        trustedConnection: true,
        trustServerCertificate: true,
        cryptoCredentialsDetails: {
          minVersion: 'TLSv1'
        }
      }
};
//teste de conexão com o banco
sql.connect(config,async function(err, resultado){
  if(err) {
  console.log(err);
  }else{
  console.log("conectado com sucesso!!")
  }
});
//exportando a conexão para ser usado em outro arquivo js
module.exports = config;


