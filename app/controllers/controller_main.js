const dataMapper = require('../db/dataMapper');

/**
 * @author KEHL Johann <jkehl.dev@gmail.com>
 * @version 1.0.0
 * @description Main controller module.
 */

const controller_main = {
    /**
     * @method controller_main#homePage - GET HOME PAGE RENDERING
     * @param {Express.Response} response - Express server response
     */
    homePage(request, response) {
        const renderingHome = (error, results) => {
            if(error){
                console.error(error);
                response.status(406).render('errors/error_406');
                return;
            }
            const pokemon_list = results.rows;
            response.render('index', {
                pokemon_list
            });
        };
        dataMapper.getPokemons(renderingHome);
    },
    /**
     * @method controller_main#homePage - GET HOME PAGE RENDERING
     * @param {Express.Response} response - Express server response
     */
    getPokemon(request, response) {
        const pokemon_id = request.params.pokemonId;
        const renderingPokemonWithTypes = (error, results) => {
            if(error){
                console.error(error);
                response.status(406).render('errors/error_406');
                return;
            }            
            response.locals.types = results.rows;
            response.render('pokemon');
        }
        const loadPokemon = (error, results) => {
            if(error){
                console.error(error);
                response.status(406).render('errors/error_406');
                return;
            }
            if(results.rows.length !== 1){
                response.status(406).render('errors/error_406');
                return;
            }
            response.locals.pokemon = results.rows[0];
            dataMapper.getPokemonTypeByNum(results.rows[0].pokemon_numero, renderingPokemonWithTypes);    
        };
        dataMapper.getPokemonById(pokemon_id, loadPokemon);
    },
};

module.exports = controller_main;