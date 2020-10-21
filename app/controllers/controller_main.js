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
        response.render('index');
    },
};

module.exports = controller_main;