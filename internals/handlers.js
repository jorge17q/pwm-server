//Manejadores de rutas virtuales
var fortune = require("./fortune");
var fechaDeNacimiento = new Date(1991,03,17,2,40);

module.exports = {
    "/edad/jorge-quinones" : function(req, res){
        res.writeHead(200, {
            "Content-Type" : "application/json"
        });
        //calculo la edad
        var hoy = new Date();
        var age = 
        Math.ceil((hoy - fechaDeNacimiento)/(1000*3600*24*365))
        //Armando json
        var objetoRespuesta = {
            "edad" : age
        };
        var jsonResponse = JSON.stringify(objetoRespuesta);
        //Envio la respuesta al cliente
        res.end(jsonResponse);
    },
    //dando de alta nueva ruta
    "/getfortune":function(req, res){
        console.log("> se solicita fortuna...");
        //se obtiene el mensaje de la suerte
       // var fortunePaper = {
         //   "mensaje" :
          //   "La honestidad es un regalo caro, no lo esperes de gente baratisima"
             //se configura el encabezado de repsuesta http
        //};
        //Parseando a string el objetoRespuesta
        //var jsonResponse =JSON.stringify(fortunePaper);
        fortune.getFortune(function(fortunePaper){
            //Se configura el encabezado de repsuests http
        
        res.writeHead(200,{
            "Content-Type" : "application/json"
        });
        console.log("contestando: " + fortunePaper);
        //var jsonResponse = JSON.stringify(fortunePaper);
        //Respondemos el objetoRespuesta
        res.end(fortunePaper);
    });
        }
};