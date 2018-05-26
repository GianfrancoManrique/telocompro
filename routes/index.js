var express = require('express');
var router = express.Router();
var controlador = require("../controllers/clienteController");

/* GET home page. */
router.get('/', controlador.obtenerFechayHora);

module.exports = router;
