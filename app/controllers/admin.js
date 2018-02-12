module.exports.formulario_inclusao_noticia = function(application, req, res){
    res.render("admin/form_add_noticia", {validacao: {}, noticiasJson: {}});
} 

module.exports.noticias_salvar = function(application, req, res){
    var noticiasJson = req.body;
   
   req.assert('titulo', 'Titulo é obrigatorio').notEmpty(); 
   req.assert('noticia', 'Notícia é obrigatorio').notEmpty(); 
   req.assert('noticia', 'Conteúdo deve conter entre 10 e 100 caracteres').len(10,100); 
   req.assert('autor', 'Autor é obrigatorio').notEmpty();
   req.assert('data_noticia', 'Data é obrigatorio').notEmpty();
    

  
  var erros = req.validationErrors(); 

  //console.log(erros);
  if(erros){
   res.render("admin/form_add_noticia", {validacao: erros, noticiasJson: noticiasJson });
   return;
  }                       


   //salvarNoticia
   var conn = application.config.dbConnection();
   var noticiaModel =  new application.app.models.NoticiasDAO(conn);

    noticiaModel.salvarNoticia(noticiasJson, function(error, result ){
        res.redirect("/noticias");    
    });



} 