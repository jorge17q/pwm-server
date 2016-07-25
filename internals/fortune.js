// 1. Cargando el Driver de Mongodb que
// me permitira conectarme a la base de datos
var mongodb = require("mongodb");
// 2. Cargo al cliente de driver
var mongoClient = mongodb.MongoClient;

module.exports = {
    "getFortune" : function(cb){
        // Conectando el cliente a la base de datos fortune
        mongoClient.connect("mongodb://127.0.0.1:27017/fortune",
        function(err, db){
            if(err){
                console.log("> ERROR al conectarse a" +
                " la base de datos:"+
                " mongodb://127.0.0.1:27017/fortune");
                var fortunePaper = {
                    "mensaje":
                    "La honestidad es un regalo caro, no lo esperes de gente barata"
                };
                // Convirtiendo el fortunePaper de objeto
                // a su version en string
                var fortunePaperResponse = JSON.stringify(fortunePaper);
                
                // Ejecuto el callback (cb) pasandole
                // como parametro el fortunepaper string
                cb(fortunePaperResponse);
            }else{
                //obtengo la  coleccion con  la  que  quiero  trabajar
                var  papersCollection = db.collection("papaers");

                //consulto  todos  lo  documentos  de  mi coleccion
                var objetoResultado = papersCollection.find({});

                //Parseo el  Objeto resultado en  un  arreglo

                objetoResultado.toArray(function (err, papers) {
                    var fortunePaperResponse =
                    JSON.stringify(papers[0]); // <---- un  elemento  al  azar que  sea  un paper  diferente  es un  arreglo  de  10  elementos paper.leng
                    // cerrar  la  conexion entre el  cliente 
                    // y la  base  de  datos
                    db.close()
                    // invoco  al  cb  pasandole como parametro
                    // la  respuesta
                    cd(fortunePaperResponse);
                })
            }
        });

    }
};
