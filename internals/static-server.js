//Cargar los modulos necesarios para crear mi servidor estatico
var fs = require ('fs'), 
    config = require ('../config/config.js');
    mime = require('mime');
    console.log("> config: " +  config);
//Esportar la funcion de servidor estatico
exports.serve = function(url, res){
    //Acompletar el Path estatico
    var filePath = config.STATIC_PATH + url;
    //Verificando si existe o no el archivo dentro del servidor
    fs.exists(filePath, function(exists){
        if(exists){
            //sirvo el archivo
            //leer arrchivos que ya hemos ocupado readFile
            fs.readFile(filePath, function(err, content){
                if(err){
                    console.log(`>Hubo error en la lectura del archivo: ${filePath}`);
                    //Enviar error 500
                    res.writeHead(500,{
                        'Content-Type' : 'text/html', 'Server' : 'pilgrimsHawk@2.1.2'
                    });
                    res.end("<h1>Error 500: Recurso Dañado <(h1>)");
                }else{
                    //Configuramos la respuesta
                    var contentType = mime.lookup(filePath);
                    //Armamos respuesta
                    res.writeHead(200, {
                        'Content-Type' : contentType,
                        'Server' : 'PilgrimsHawks-Server@2.1.2'
                    });
                    //Enviar archivo
                    res.end(content);
                }
            }); 
        }else{
            //mando un codigo 404
            res.writeHead(404,{
                'Content-Type' : 'text/html','Server' : 'pilgrimsHawk@2.1.2'
            });
            res.end("<h1>Error 404: Recurso no encontrado <(h1>)");
        }
    });
};