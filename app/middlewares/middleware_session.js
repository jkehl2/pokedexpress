/**
 * @author KEHL Johann <jkehl.dev@gmail.com>
 * @version 1.0.0
 * @description Session middleware module.
 */
const sessionMiddleware = {

    /**
     * @method controller_main#homePage - GET HOME PAGE RENDERING
     * @param {Express.Request} request - Express server request
     * @param {Express.Response} response - Express server response
     * @param {CallableFunction} next - next middleware
     */
    init(request, response, next) {
        if (request.session.user == null) {
            request.session.user = {};
        }
        if (request.session.message == null) {
            request.session.message = {};
        }else{
            const message = request.session.message;
            if (Object.keys(message).length > 0) {
                response.locals.message = request.session.message;
                request.session.message = {};
            }
        }
        next();
    }
}
module.exports = sessionMiddleware;