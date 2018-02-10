module.exports = function(app){
    
        app.get('/noticia', function(req,res){
   
        var conn = app.config.dbConnection();
        var noticiaModel = app.app.models.noticiasModel;

        noticiaModel.getNoticia(conn, function(error, result ){
            res.render('noticias/noticia', {noticia:result});     
        });
    });
};


