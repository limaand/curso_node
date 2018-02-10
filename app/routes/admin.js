module.exports = function(app){
   app.get('/form_inclusao_noticia', function(req,res){
   res.render("admin/form_add_noticia");
 });

  app.post('/noticias/salvar', function(req,res){
   var noticiasJson = req.body;
   


   //salvarNoticia
   var conn = app.config.dbConnection();
   var noticiaModel =  new app.app.models.NoticiasDAO(conn);

    noticiaModel.salvarNoticia(noticiasJson, function(error, result ){
        res.redirect("/noticias");    
    });



  });
  



}