const express = require('express');
const controller_main = require('../controllers/controller_main');

/**
 * @author KEHL Johann <jkehl.dev@gmail.com>
 * @version 1.0.0
 * @description Main router module.
 */
const router_main = express.Router();

router_main.get('/', controller_main.homePage);
router_main.get('/pokemon/:pokemonId', controller_main.getPokemon);

module.exports = router_main;