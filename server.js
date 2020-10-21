require('dotenv').config();
const express = require('express');

/**
 * @author KEHL Johann <jkehl.dev@gmail.com>
 * @version 1.0.0
 * @description Main app module. Configure Express HTTPS web server.
 */
const app = express();

app.set('view engine', 'ejs');
app.set('views', './app/views');

app.use(express.urlencoded({
  extended: true
}));

const session = require('express-session');
const secret = process.env.SESSPASSPHRASE;
app.use(session({
  secret,
  saveUninitialized: true,
  resave: true,
  cookie: {
    secure: false,
    httpOnly: false,
    //  domain: 'example.com',
    //  path: 'foo/bar',
    maxAge: (1000 * 60 * 60)
  }
}));

app.use(express.static('public'));

// SET LOCALS
// GIVE ROOT PATH AND MESSAGE VAR FOR EJS INCLUDES
const path = require('path');
app.use((_, response, next) => {
  response.locals.rootpath = path.resolve('./app/views/');
  if (response.locals.message == null) {
    response.locals.message = {};
  }
  next();
})

// MAIN ROUTER & SESSION INIT
const router_main = require('./app/routers/router_main');
const midlleware_session = require('./app/middlewares/middleware_session');
app.use('/', midlleware_session.init, router_main);

// PAGE NOT FOUND AFTER ALL
const controller_error = require('./app/controllers/controller_error');
app.use(controller_error.error_404);


// CREATE SERVER
const http = require('http');
const APP_PORT_HTTP = process.env.PORT_HTTP;
http.createServer(app).listen(APP_PORT_HTTP);