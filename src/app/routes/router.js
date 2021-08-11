
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

  getRegistro_nue_afi,

  getLogout,
  gettabla_registros,
  posttabla_registros,
  getDeletetabla,
  postActualizartabla,
 
}= require("../controllers/controller")

module.exports = app => {


    app.get('/', getIndex);
    
    app.get('/login', getLogin);
    app.post('/login', postLogin);
      
    app.get('/registro', getRegistro);
    app.post('/registro', postRegistro);

    app.get('/images', getImages);

    app.get('/inside', getInside);

    app.get('/registroActas', getRegistroActas);
    app.post('/registroActas', postRegistroActas);


    app.get('/nuevosAfiliados', getRegistro_nue_afi);

    app.get('/tablaRegistros', gettabla_registros);
   
    app.get("/tablaRegistros", gettabla_registros);
    app.post("/tablaRegistros", posttabla_registros);
    app.get("/deleteTabla/:id", getDeletetabla);
    app.post("/updateTabla/:id", postActualizartabla);

    /*app.get("/tablaRegistros", gettabla_registros);
    app.post("/tablaRegistros", upload, posttabla_registros);
    app.get("/deleteTabla/:id", getDeletetabla);
    app.post("/updateTabla/:id", upload, postActualizartabla);*/




    /* Cierre sesión */
    app.get("/logout", getLogout);

}