const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
    //1.obtener url desde el objeto request

    const urlActual = req.url;
    const urlPArseada = url.parse(urlActual,true);
    //2.obtener la ruta
    const ruta = urlPArseada.pathname;
    //3.quitar slach
    const rutaLimpia= ruta.replace(/^\/+|\/+$/g,'');
    //3.1 obtener el metodo http
    console.log(req.method.toLowerCase());
    //4.envia una respuesta dependiendo de la ruta
    if(rutaLimpia==="ruta"){
        res.end('hola estas en la ruta');
    }else{
        res.end('estas en una ruta que no conosco');
    }
});

server.listen(5000,()=>{
    console.log("el servidor se esta escuchando la peticion");
});
