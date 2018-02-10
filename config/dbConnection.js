var mysql = require('mysql');

var connMySQL = function(){
   console.log('conexao com bd estabelecida');
   return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password : '',
        database: 'portal_noticias'
    });

}


module.exports = function(){
   console.log('autoload carregou o modulo de banco de dados') 
   return connMySQL;
} 

   