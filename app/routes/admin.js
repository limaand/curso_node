module.exports = function(app){
   app.get('/form_inclusao_noticia', function(req,res){
   res.render("admin/form_add_noticia");
 });

  app.post('/noticias/salvar', function(req,res){
   var noticiasJson = req.body;
   
   req.assert('titulo', 'Titulo é obrigatorio').notEmpty(); 
   req.assert('noticia', 'Notícia é obrigatorio').notEmpty(); 
   req.assert('noticia', 'Conteúdo deve conter entre 10 e 100 caracteres').len(10,100); 
   req.assert('autor', 'Autor é obrigatorio').notEmpty();
   req.assert('data_noticia', 'Data é obrigatorio').notEmpty();
    

  
  var erros = req.validationErrors(); 

  //console.log(erros);
  if(erros){
   res.render("admin/form_add_noticia", {validacao: erros});
   return;
  }                       


   //salvarNoticia
   var conn = app.config.dbConnection();
   var noticiaModel =  new app.app.models.NoticiasDAO(conn);

    noticiaModel.salvarNoticia(noticiasJson, function(error, result ){
        res.redirect("/noticias");    
    });



  });
  



}