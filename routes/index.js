var express = require('express');
var router = express.Router();
var controlador = require("../controllers/clienteController");

/* GET home page. */
router.get('/', controlador.obtenerFechayHora);
router.get('/crear-cliente', controlador.crearCliente);

module.exports = router;
