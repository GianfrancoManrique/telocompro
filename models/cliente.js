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

modelo.regCliente=(idficha)=>{
	return new Promise(async (resolve,reject)=>{
		try {
			let comando='insert into produccion.cliente(idficha,url) values(';
			comando=comando.concat(idficha,',\'',url,'\')');
			let resultado=await conexion.query(comando);
			resolve(resultado);
		} catch (error) {
			reject(error);
		}
	});
}

modelo.regDeuda=(cliente)=>{
	return new Promise(async (resolve,reject)=>{
		try {
			let comando='insert into produccion.deuda (idcliente,nombreentidad,numcuotasrestantes,cuotamensual,tea) values(';
			comando=comando.concat(cliente.idcliente,',\'',cliente.nombreentidad,'\',');
			comando=comando.concat(cliente.numcuotasrestantes,',',cliente.cuotamensual,',');
			comando=comando.concat(cliente.tea,')');

			let resultado=await conexion.query(comando);
			resolve(resultado);
		} catch (error) {
			reject(error);
		}
	});
}


module.exports = modelo;