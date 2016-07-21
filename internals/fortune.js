var fortunePaper = {
    "mensaje":
    "La honestidad es un regalo caro, no loe speres de gente baratisima"
};
module.exports = {
    "getFortune" : function(cb){
        //convirtiendo el fortunePaper de objeto a su version en string
        fortunePaper = JSON.stringify(fortunePaper);
        //Ejecuto el callback (cb) pasandole como parametro el fortunePaper string
        cb(fortunePaper);
    } 
};