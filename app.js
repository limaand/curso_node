
var app = require('./config/server');


/* chamando as rotas

var rotaNoticias = require('./app/routes/noticias')(app);
var rotaHome = require('./app/routes/home')(app);
var rotaFormInclusaoNoticia = require('./app/routes/formulario_inclusao_noticia')(app);
*/



app.listen(3000, function(){
   console.log('servidor ON');
});






