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

controlador.crearCliente= async (req, res, next)=>{
	try {
		//console.log('Desde aca');
        res.render("crear-cliente");
	} catch (error) {
		console.log(error);
	}
}
/*
controlador.registrarCliente= async (req, res, next)=>{
	try {

		let cliente={nombres:req.body.nombres,apellidos:req.body.apellidos,
		celular:req.body.celular,tipodoc:req.body.tipodoc,numdoc:req.body.numdoc,
		departamento:req.body.departamento,provincia:req.body.provincia,distrito:req.body.distrito,
		correo:req.body.correo,contrasena:req.body.contrasena,fecnacimiento:req.body.fecnacimiento,
		estcivil:req.body.estcivil
		}
		
		let idregistrado=await model.regCliente(cliente);
		res.send(idregistrado);
	} catch (error) {
		console.log(error);
	}
}
*/
controlador.dashboardfinanciera= async (req, res, next)=>{
	try {
		//console.log('Desde aca');
        res.render("dashboard-financiera");
	} catch (error) {
		console.log(error);
	}
}
module.exports = controlador;