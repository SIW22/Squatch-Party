const express = require('express');
const methodOverride = require('method-override');
const bodyParser = require('body-parser');
const app = express(); 

// Set View Engine (Server Rendered Templates)
app.set('view engine', 'ejs');

// User Controller
const userController = require('./controllers/userController')

// ----------------- MIDDLEWARE

// Serve Static Assets
app.use(express.static(`${__dirname}/public`));

app.use(methodOverride('_method'));

// BodyParser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Custom Middleware
// The use() method is GET, POST, PUT, DELETE all together
app.use((request, response, next) => {
  console.log(`Request received, url = ${request.url} ,${new Date().toLocaleTimeString()}`);
  next(); // The next() method will pass the request on to the next function in the middleware chain (in this app, routes are next)
});

app .use('/users', userController)


app.listen(4000,() =>{
    console.log('server is running at port 4000')
})