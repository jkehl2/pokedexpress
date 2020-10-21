const dataBase_client = require('./dataBase_client');

/**
 * @author KEHL Johann <jkehl.dev@gmail.com>
 * @version 1.0.0
 * @description DATA MAPPER module.
 */
const dataMapper = {
    // /**
    //  * @method dataMapper#getUser - GET USER REQUEST BY USER NAME
    //  * @param {String} user_name User name
    //  * @param {CallableFunction} callback (err: Error, result: QueryArrayResult<R>) - Function call after resolve request.
    //  */
    // getUser(user_name, callback) {
    //     const query = {
    //         text: `SELECT * FROM "users" WHERE "user_name"=$1`
    //     };
    //     dataBase_client.query(query,[user_name], callback);
    // },
};


module.exports = dataMapper;