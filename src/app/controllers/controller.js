// Rutas.
// Conexion con bd.
const connection = require("../../config/db.js");
const bcryptjs = require("bcryptjs");

// index
const getIndex = (req, res) => {
  if (req.session.loggedin) {
    res.render("index.ejs", {
      // Enviar parametros
      usuario: req.session.usuario,
      rol: req.session.rol,
      login: true,
    });
  } else {
    res.render("index.ejs", {
      usuario: req.session.usuario,
      rol: req.session.rol,
      login: false,
    });
  }
};

//   Login
const getLogin = (req, res) => {
  if (req.session.loggedin) {
    res.render("inside.ejs", {
      // Enviar parametros
      usuario: req.session.usuario,
      rol: req.session.rol,
      login: true,
    });
  } else {
    res.render("login.ejs", {
      usuario: req.session.usuario,
      rol: req.session.rol,
      login: false,
    });
  }
};

const postLogin = async (req, res) => {
  const { usuario, passw } = req.body;
  console.log(req.body);
  connection.query("SELECT * FROM actores WHERE usuario = ? ",[usuario],
    async (err, result) => {
        if (await result.length === 0 ||!(await bcryptjs.compare(passw, result[0].passw))){
        res.render("login.ejs", {
          login: false,
          alert: true,
          alertTitle: "Invalido",
          alertMessage: "Usuario y/o Contraseña Inconrrectas",
          alertIcon: "error",
          showConfirmButton: false,
          timer: false,
          ruta: "login",
        });
      } else {
        req.session.loggedin = await true;
        req.session.id_actores = result[0].id_actores;
        req.session.usuario = result[0].usuario;
        req.session.rol = result[0].rol;
        res.render("inside.ejs", {
          login: false,
          alert: true,
          alertTitle: "Correcto",
          alertMessage: "Login Exitoso",
          alertIcon: "info",
          showConfirmButton: false,
          timer: 2500,
          ruta: "inside",
        });
      }
    }
  );
};

//   Registro Actores
const getRegistro = (req, res) => {
  if (req.session.loggedin) {
    res.render("registro.ejs", {
      // Enviar parametros
      usuario: req.session.usuario,
      rol: req.session.rol,
      login: true,
    });
  } else {
    res.render("registro.ejs", {
      usuario: req.session.usuario,
      rol: req.session.rol,
      login: false,
    });
  }
};

const postRegistro = async (req, res) => {
  const { usuario, nombre, apellido, passw, rol } = req.body;
  console.log(req.body);

  let passwordHaash = await bcryptjs.hash(passw, 8);

  connection.query("SELECT * FROM actores WHERE usuario = ?", [usuario],(err, results) =>{
    if (results.length === 0){
        connection.query("INSERT INTO actores SET ?",{
            usuario: usuario, 
            nombre: nombre, 
            apellido: apellido, 
            passw: passwordHaash, 
            rol: rol,
        },
        async (err, result) =>{
            if(err){
                console.log("Muestre Error: "+ err);
            }else{
                res.render("registro.ejs", {
                    login: false,
                    alert: true,
                    alertTitle: "Exitoso!",
                    alertMessage: "Usuario registrado ",
                    alertIcon: "info",
                    showConfirmButton: false,
                    timer: 3500,
                    ruta: "login",
                  });
            }
        });
    }else{
        res.render("registro.ejs", {
            login: false,
            alert: true,
            alertTitle: "¡Cuidado!",
            alertMessage: "usuario no se encuentar disponible",
            alertIcon: "info",
            showConfirmButton: false,
            timer: 3500,
            ruta: "registro",
          });
    }
  })
};


//   Images
const getImages = (req, res) => {
  if (req.session.loggedin) {
    res.render("Images.ejs", {
      // Enviar parametros
      usuario: req.session.usuario,
      rol: req.session.rol,
      login: true,
    });
  } else {
    res.render("Images.ejs", {
      usuario: req.session.usuario,
      rol: req.session.rol,
      login: false,
    });
  }
};

//   Inside
const getInside = (req, res) => {
  if (req.session.loggedin) {
    res.render("inside.ejs", {
      // Enviar parametros
      usuario: req.session.usuario,
      rol: req.session.rol,
      login: true,
    });
  } else {
    res.render("index.ejs", {
      usuario: req.session.usuario,
      rol: req.session.rol,
      login: false,
    });
  }
};

// Registro de Actas
const getRegistroActas = (req, res) => {
  if (req.session.loggedin) {
    res.render("registro_actas.ejs", {
      // Enviar parametros
      usuario: req.session.usuario,
      rol: req.session.rol,
      login: true,
    });
  } else {
    res.render("index.ejs", {
      usuario: req.session.usuario,
      rol: req.session.rol,
      login: false,
    });
  }
};


const postRegistroActas = async (req, res) => {
 const { usuario, codigoActa, fecha, archivo, } = req.body;
 console.log(req.body);
 connection.query("INSERT INTO actas SET ?", {
   usuario_registra: usuario,
   codigo_acta: codigoActa,
   fecha_creacion: fecha,
   registra: archivo
 }, async(error,results) =>{
   if (error){
     console.log(error);
   } else {
    res.render("registro_actas.ejs", {
      login: false,
      alert: true,
      alertTitle: "Exitoso!",
      alertMessage: "Acta registrada ",
      alertIcon: "info",
      showConfirmButton: false,
      timer: 3500,
      ruta: "registroActas",
    });
   }
 })
};


//   Registro nuevo afiliados
const getRegistro_nue_afi = (req, res) => {
  if (req.session.loggedin) {
    res.render("registro_nue_afi.ejs", {
      // Enviar parametros
      usuario: req.session.usuario,
      rol: req.session.rol,
      login: true,
    });
  } else {
    res.render("registro_nue_afi.ejs", {
      usuario: req.session.usuario,
      rol: req.session.rol,
      login: false,
    });
  }
};


const postRegistro_nue_afi = async (req, res) => {
  
  const {Nombre, Apellido, Edad, Documento, Direccion, Telefono, Profesion, Comentario, Comite, Firma, Registra} = req.body;
        
  connection.query("INSERT INTO afiliados SET ?",
    {
      nombre: Nombre,
      apellido: Apellido,
      edad: Edad,
      documento: Documento,
      direccion: Direccion,
      telefono: Telefono,
      profesion: Profesion,
      observaciones: Comentario,
      nombre_comite: Comite,
      firma_digitalizada: Firma,
      registra: Registra,
    },async (error, results) => {
      if (error) {
        console.log("Error: " + error);
      } else {
        res.render("pruebaVista.ejs", {
          datos: results,
          username: req.session.username,
          login: true,
          rol: req.session.rol,
          alert: true,
          alertTitle: "Enviado",
          alertMessage: "¡Registro exitoso!",
          alertIcon: "success",
          showConfirmButton: false,
          timer: 1500,
          ruta: "pruebaVista",
        });
      }
    }
  );

}

//   Tabla registros 

const getPruebaTabla = (req, res) => {
  connection.query("SELECT * FROM afiliados", (error, result) => {
    if (error) {
      console.log("Error : " + error)
    } else {
      if (req.session.loggedin){
        res.render('prueba_tabla.ejs',{
          datos: result,
          login: true,
        });
      } else (
        res.render('prueba_tabla.ejs', {
          login: false, 
        })
      )
    }
  })
};


const getDeletetabla = (req,res) => {
  
    const id= req.params.id;
    console.log(id);
    const queryDeleteAfiliados= ("DELETE FROM afiliados WHERE id_afiliados = ?");
    connection.query(queryDeleteAfiliados, [id], (err,result) => {
      if(err){
        res.send(err);
      }else{
         res.redirect("pruebaVista");
      }
    });

}

const postActualizartabla = (req,res) => {
  const id= req.params.id;
  console.log(id);
  const{Nombre, Apellido, Edad, Documento, Direccion, Telefono, Profesion, Comentario, Comite, Firma, Registra} = req.body;
  console.log(req.body);
  const queryUpdateAfiliados=("UPDATE afiliados SET nombre = ?, apellido = ?, fecha_nacimiento = ?, edad = ?, documento = ?, direccion = ?, direccion = ?, telefono = ?, profesion= ?, observaciones = ?, nombre_comite = ?, firma_digitalizada = ?, registra = ? WHERE id_afiliados = ?");
  connection.query( queryUpdateAfiliados, [Nombre, Apellido, Edad, Documento, Direccion, Telefono, Profesion, Comentario, Comite, Firma, Registra, id], (err, results) =>  {
    if(err){
      res.send(err);
    }else{
      res.redirect("/pruebaVista.ejs");
    }
  });

};

//prueba vista

const getPruebavista = (req, res) => {
  connection.query("SELECT * FROM afiliados", (error, result) => {
    if (error) {
      console.log("Error : " + error)
    } else {
      if (req.session.loggedin){
        res.render('pruebaVista.ejs',{
          datos: result,
          login: true,
          rol: req.session.rol,
          //rol: "",
        });
      } else (
        res.render('inside.ejs', {
          login: false, 
        })
      )
    }
  })
};

/*const getPruebavista = (req, res) => {
  if (req.session.loggedin) {
    res.render("pruebaVista.ejs", {
      // Enviar parametros
      usuario: req.session.usuario,
      rol: req.session.rol,
      datos: res,
      login: true,
    });
  } else {
    res.render("index.ejs", {
      usuario: req.session.usuario,
      rol: req.session.rol,
      login: false,
    });
  }
};*/


/* Cierre sesión */

const getLogout = (req, res) => {
    try {
      req.session.destroy(() => {
        res.redirect("/");
      });
    } catch (error) {
      console.log('Error: '+error);
    }
  };

module.exports = {
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
  postRegistro_nue_afi,

  getPruebaTabla, 

  getDeletetabla,
  postActualizartabla,

  getPruebavista,

  getLogout,
};
