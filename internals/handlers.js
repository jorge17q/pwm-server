//Manejadores de rutas virtuales
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
    } 
};