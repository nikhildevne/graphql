// app.js
const express = require('express');
const exphbs = require('express-handlebars');

const app = express();
const port = 3000;

// Set up Handlebars as the view engine
app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

// Define a route to render the Handlebars template
app.get('/', (req, res) => {
    res.render('home', { title: 'My Handlebars App', message: 'Welcome to Handlebars!' });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
