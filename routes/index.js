var express = require('express');
var router = express.Router();
var controlador = require("../controllers/clienteController");

/* GET home page. */
router.get('/', controlador.obtenerFechayHora);
router.get('/crear-cliente', controlador.crearCliente);
//router.post('/registrar-cliente', controlador.registrarCliente);
router.get('/dashboard-financiera',controlador.dashboardfinanciera);
module.exports = router;    
