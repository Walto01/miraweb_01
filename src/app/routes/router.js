
const {
  getIndex,

  getLogin,
  postLogin,

  getRegistro,
  postRegistro,

  getImages,

  getInside,

  getRegistroActas,
  postRegistroActas, 

  getPruebaTabla,

  getRegistro_nue_afi,

  getLogout,

  getDeletetabla,
  postActualizartabla,
  postRegistro_nue_afi,
  getPruebavista,
 
}= require("../controllers/controller")

module.exports = app => {


    app.get('/', getIndex);

    //login
    app.get('/login', getLogin);
    app.post('/login', postLogin);
      
    // Registro Actores
    app.get('/registro', getRegistro);
    app.post('/registro', postRegistro);

    // Acerca de nosotros
    app.get('/images', getImages);

    //Inside
    app.get('/inside', getInside);

    //Registro de Actas
    app.get('/registroActas', getRegistroActas);
    app.post('/registroActas', postRegistroActas);

    //Registro nuevos afiliados 
    app.get('/nuevosAfiliados', getRegistro_nue_afi);
    app.post('/nuevosAfiliados', postRegistro_nue_afi);

    app.get('/pruebaTabla', getPruebaTabla);
    app.get("/pruebaVista", getPruebavista);
    
    app.get("/deleteTabla/:id", getDeletetabla);
    app.post("/updateTabla/:id", postActualizartabla);

   


    /*app.get("/tablaRegistros", gettabla_registros);
    app.post("/tablaRegistros", upload, posttabla_registros);
    app.get("/deleteTabla/:id", getDeletetabla);
    app.post("/updateTabla/:id", upload, postActualizartabla);*/




    /* Cierre sesión */
    app.get("/logout", getLogout);

}