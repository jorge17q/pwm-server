//LEYENDO ARCHIVOS DE CONFIGURACIONES

var fs  = require ("fs");
var objconfig =
JSON.parse(fs.readFileSync("./config/config.json","utf-8")
);

objconfig.IP = process.env.IP || objconfig.IP; 
objconfig.PORT = process.env.IP || objconfig.PORT;
module.exports = objconfig;