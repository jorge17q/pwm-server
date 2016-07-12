// http
var http = require("http");
var fs = require('fs');
var config =require("./config/config.js");
var colors = require('colors');
var staticServer = require ('./internals/static-server');
//Obteniendo informacion del entorno de ejecucion con respecto a la IP y al puerto que debemos usar en nuestro server
var PORT = config.PORT; 
var IP = config.IP;  
if (IP == '127.0.0.1'){
    console.log (">-------EXPORTANDO EN MODO LOCAL -----<"); 
}                   //permite acceeder a  las variables enrtono donde se esta ejecutando el proceso

// Crear un servidor basico
var server = http.createServer(function (req, res) {
    //Obtener la url del archivo
    var url = req.url;
    if(url == "/"){
        //sirve el index
        url = "/index.html";
    }
    console.log(` > URL Solicitada: ${url}... `.yellow);
    //Sirvo la url con mi server estatico
    staticServer.serve(url, res);
});
//Poner a trabajar al server
server.listen(PORT,IP,function () {
    console.log(`> Server listening @http://${IP}:${PORT} ...`)
});

