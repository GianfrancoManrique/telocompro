var express = require('express');
var router = express.Router();
var controlador = require("../controllers/clienteController");

/* GET users listing. */
router.get('/crear-cliente', function(req, res, next) {
  res.render("crear-cliente");
});

module.exports = router;
