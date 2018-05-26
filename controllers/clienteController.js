let model = require("../models/cliente");

let controlador = ()=>{};
/*
controlador.obtenerFechayHora = async (req, res, next)=>{
	try {
        let fechaHora=await model.consultarPerfil();
        
		console.log(fechaHora);

        res.render("index",{fechaHora});
        
	} catch (error) {
		console.log(error);
	}
}
*/
controlador.principal= async (req, res, next)=>{
	try {
        res.render("index");
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
controlador.dashboardusuario= async (req, res, next)=>{
	try {
		//console.log('Desde aca');
        res.render("dashboard-usuario");
	} catch (error) {
		console.log(error);
	}
}
controlador.dashboardfinanciera= async (req, res, next)=>{
	try {
		//console.log('Desde aca');
		let ofertasActivas=await model.ofertasActivas();

		res.render("dashboard-financiera",{ofertasActivas});
		console.log(ofertasActivas);
	} catch (error) {
		console.log(error);
	}
}
controlador.subasta= async (req, res, next)=>{
	try {
		//console.log('Desde aca');
        res.render("subasta");
	} catch (error) {
		console.log(error);
	}
}
controlador.subastaUsuario= async (req, res, next)=>{
	try {
		//console.log('Desde aca');
        res.render("subasta-usuario",{});
	} catch (error) {
		console.log(error);
	}
}
controlador.registrarCliente= async (req, res, next)=>{
	try {

		let cliente={nombres:req.body.nombres,apellidos:req.body.apellidos,
		celular:req.body.celular,tipodoc:req.body.tipodoc,numdoc:req.body.numdoc,
		departamento:req.body.departamento,provincia:req.body.provincia,distrito:req.body.distrito,
		correo:req.body.correo,contrasena:req.body.contrasena,fecnacimiento:req.body.fecnacimiento,
		estadocivil:req.body.estadocivil,ingresos:req.body.ingresos,dependencia:req.body.dependencia
		}
		
		let idregistrado=await model.regCliente(cliente);
		//res.send(idregistrado);
		res.redirect('/dashboard-usuario');
	} catch (error) {
		console.log(error);
	}
}
controlador.registrarSubasta= async (req, res, next)=>{
	try {
		let subasta={nombreentidad:req.body.nombreentidad,numcuotasrestantes:req.body.numcuotasrestantes,
			cuotamensual:req.body.cuotamensual,tea:req.body.tea,idcliente:req.body.idcliente
		}
		
		let idregistrado=await model.regSubasta(subasta);
		res.redirect('/dashboard-financiera');
		//res.send(idregistrado);
	} catch (error) {
		console.log(error);
	}
}
module.exports = controlador;