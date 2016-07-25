//1.- Cargar el driver de mongodb que me permitira conectarme a la base de datos

var mongodb = require("mongodb");
//2.-Cargar cliente de driver
var mongoClient = mongo.MongoClient;
module.exports = {
    "getFortune" : function(cb){
        //conectando al cliente ala base de datos fortune
        mongoClient.connect("mongodb://127.0.0.1:27017/fortune",
        function(err, db){
            if(err){
                console.log(">ERROR al conectarse a" + "la base de datos:" + "mongodb://127.0.0.1:27017/fortune")

                var fortunePaper = {
                    "mensaje":
                    "La honestidad es un regalo caro, no loe speres de gente baratisima"
};
        //convirtiendo el fortunePaper de objeto a su version en string
               var fortunePaperResponse = JSON.stringify(fortunePaper);
         
        //Ejecuto el callback (cb) pasandole como parametro el fortunePaper string
        cb(fortunePaperResponse);
    } else{
        //obtengo la coleccion con la que quieor trabajar
        var papersCollection = db.collection("papers");
        //consulto todos los documentos de mi coleccion
        var objetoResultado = papersCollection.find({});
        //parseo el objeto resultado en un arreglo
        objetoResultado.toArray(function(err, papers){
            var fortunePaperResponse = JSON.stringify(papers[0]);
            //Cerrar la conexion entre el cliente y la base de datos
            db.close()
            //Invoco al callback pasandole como parametro la repsuesta
            cb(fortunePaperResponse);
    });
        }      
        