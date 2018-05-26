const conexion = require("../connections/conPostgreSQL");

let modelo =()=>{};

modelo.consultarPerfil=(idficha)=>{
	return new Promise(async (resolve,reject)=>{
		try {
			let comando='select now() as fechayhora';
			let resultado=await conexion.query(comando);
			resolve(resultado.rows);
		} catch (error) {
			reject(error);
		}
	});
}

module.exports = modelo;