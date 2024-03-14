const Sequelize = require('sequelize')


const conn = new Sequelize('CINEMA', 'sa', 'rqqo231', 
    {
    
    dialect: 'mssql',
    host: 'localhost',
    port:1433,
    dialectOptions: {
        options: {
            validateBulkLoadParameters:false,
            encrypt: false,
            trustedConnection: true,
            trustServerCertificate: true,
            cryptoCredentialsDetails: {
            minVersion: 'TLSv1'
            }
    },
}
    /*
    dialectOptions: {
      authentication: {
        //type: 'ntlm',
        options: {
            useUTC: false,
            dateFirst: 1,
         // domain: 'localhost',
         // port: 1433
         // userName: 'username',
         // password: 'password'
        }
      },
      options: {
        //instanceName: 'SQLEXPRESS'
        
      }
    } */
  })

  //teste de conexão com o banco
  conn.authenticate().then(()=>{
    console.log('coectado')
    }).catch(err=>{
    console.log(err);
    
    })

    module.exports = conn