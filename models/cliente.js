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

modelo.regCliente=(cliente)=>{
	return new Promise(async (resolve,reject)=>{
		try {
			let comando='insert into produccion.cliente(nombres,apellidos,celular,tipodoc,numdoc,departamento,provincia,distrito,correo,contrasena,fecnacimiento,estadocivil,ingresos,dependencia) values(\'';
			comando=comando.concat(cliente.nombres,'\',\'',cliente.apellidos,'\',\'');
			comando=comando.concat(cliente.celular,'\',\'',cliente.tipodoc,'\',\'');
			comando=comando.concat(cliente.numdoc,'\',\'',cliente.departamento,'\',\'');
			comando=comando.concat(cliente.provincia,'\',\'');
			comando=comando.concat(cliente.distrito,'\',\'',cliente.correo,'\',\'');
			comando=comando.concat(cliente.contrasena,'\',\'',cliente.fecnacimiento,'\',\'');
			comando=comando.concat(cliente.estadocivil,'\',\'',cliente.ingresos,'\',\'');
			comando=comando.concat(cliente.dependencia,'\')');
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

modelo.ofertasActivas=(idficha)=>{
	return new Promise(async (resolve,reject)=>{
		try {
			let comando="select 'S/. ' ||(sum(numcuotasrestantes * cuotamensual)|| '.00') as suma, d.idsubasta from produccion.deuda d inner join produccion.subasta s on d.idsubasta = s.idsubasta where d.idsubasta is not null group by d.idsubasta";
			let resultado=await conexion.query(comando);
			resolve(resultado.rows);
		} catch (error) {
			reject(error);
		}
	});
}

module.exports = modelo;