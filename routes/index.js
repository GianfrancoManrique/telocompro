var express = require('express');
var router = express.Router();
var controlador = require("../controllers/clienteController");

/* GET home page. */
router.get('/', controlador.principal);
router.get('/crear-cliente', controlador.crearCliente);
router.post('/registrar-cliente', controlador.registrarCliente);
router.get('/dashboard-financiera',controlador.dashboardfinanciera);
router.get('/dashboard-usuario',controlador.dashboardusuario);
router.get('/subasta',controlador.subasta);
router.get('/subasta-usuario',controlador.subastaUsuario);
router.post('/registrar-subasta',controlador.registrarSubasta);
module.exports = router;    
