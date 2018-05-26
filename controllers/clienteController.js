let model = require("../models/cliente");

let controlador = ()=>{};

controlador.obtenerFechayHora = async (req, res, next)=>{
	try {
        let fechaHora=await model.consultarPerfil();
        
		console.log(fechaHora);

        res.render("index",{fechaHora});
        
	} catch (error) {
		console.log(error);
	}
}

module.exports = controlador;