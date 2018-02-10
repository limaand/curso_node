var http = require('http');



var server = http.createServer(function(req, response){

    var categoria = req.url;

    if (categoria == '/tecnologia'){
          response.end('<html><body> <h1> Noticias de Tecnologia</h1></body></html>');

    } else if (categoria == '/moda'){
         response.end('<html><body> <h1> Noticias de Moda</h1></body></html>');

    } else if(categoria == '/beleza'){
         response.end('<html><body> <h1> Noticias de Beleza</h1></body></html>');
    }else{
         response.end('<html><body> Portal de Noticias</body></html>');
    }
   
});


server.listen(3000);
console.log("Servidor rodando em http://localhost:3000");