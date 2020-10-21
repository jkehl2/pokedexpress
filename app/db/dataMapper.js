const dataBase_client = require('./dataBase_client');

/**
 * @author KEHL Johann <jkehl.dev@gmail.com>
 * @version 1.0.0
 * @description DATA MAPPER module.
 */
const dataMapper = {
    /**
     * @method dataMapper#getPokemons - SELECT ALL POKEMONS REQUEST
     * @param {CallableFunction} callback (err: Error, result: QueryArrayResult<R>) - Function call after resolve request.
     */
    getPokemons(callback) {
        const query = {
            text: ` SELECT "pokemon"."id" as pokemon_id,"pokemon"."numero" as pokemon_numero, "pokemon"."nom" as pokemon_name 
                    FROM "pokemon" 
                    ORDER BY pokemon_numero ASC`
        };
        dataBase_client.query(query, callback);
    },
    /**
     * @method dataMapper#getPokemonById - SELECT POKEMON REQUEST BY POKEMON ID
     * @param {Number} pokemon_id Pokemon id
     * @param {CallableFunction} callback (err: Error, result: QueryArrayResult<R>) - Function call after resolve request.
     */
    getPokemonById(pokemon_id, callback) {
        const query = {
            text: ` SELECT  "pokemon"."id" as pokemon_id,
                            "pokemon"."numero" as pokemon_numero,
                            "pokemon"."nom" as pokemon_name, 
                            "pokemon"."pv" as pokemon_pv, 
                            "pokemon"."attaque" as pokemon_attack, 
                            "pokemon"."defense" as pokemon_defense, 
                            "pokemon"."attaque_spe" as pokemon_attack_spe, 
                            "pokemon"."defense_spe" as pokemon_defense_spe, 
                            "pokemon"."vitesse" as pokemon_vitesse
                    FROM "pokemon"                     
                    WHERE  "pokemon"."id" = $1`
        };
        dataBase_client.query(query, [pokemon_id], callback);
    },
    /**
     * @method dataMapper#getPokemonTypeByNum - SELECT POKEMON TYPE REQUEST BY POKEMON NUMERO
     * @param {Number} pokemon_numero Pokemon numéro
     * @param {CallableFunction} callback (err: Error, result: QueryArrayResult<R>) - Function call after resolve request.
     */
    getPokemonTypeByNum(pokemon_numero, callback) {
        const query = {
            text: ` SELECT  "type"."name" as pokemon_type,
                            "type"."color" as pokemon_color
                    FROM "type" 
                    JOIN "pokemon_type" ON "pokemon_type"."type_id" = "type"."id"                     
                    WHERE  "pokemon_type"."pokemon_numero" = $1`
        };
        dataBase_client.query(query, [pokemon_numero], callback);
    },
};


module.exports = dataMapper;