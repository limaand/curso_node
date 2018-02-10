module.exports = function(app){
    
        app.get('/noticia', function(req,res){
   
        var conn = app.config.dbConnection();
        var noticiaModel = app.app.models.NoticiasDAO;

        noticiaModel.getNoticia(conn, function(error, result ){
            res.render('noticias/noticia', {noticia:result});     
        });
    });
};


