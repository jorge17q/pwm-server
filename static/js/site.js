function hola(){
    sweetAlert("World places", "!Bienvenido a esta pagina!");
    document.body.style.backgroundColor ="lightgreen"
}

function changeBkgColor(){
    var color =document.body.style.backgroundColor;
    if(color =="lightgreen"){
        color = "honeydew";
    }else{
        color = "lightgreen";
    }
    console.log(">Cambando color a " + color);
    document.body.style.backgroundColor = color;
}