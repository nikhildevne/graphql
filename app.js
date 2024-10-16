// app.js
const express = require('express');
const exphbs = require('express-handlebars');

const app = express();
const port = 3000;

// Set up Handlebars as the view engine
console.log('enters in app.js')
app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

// Define a route to render the Handlebars template
app.get('/profile', (req, res) => {
    console.log('comes here...')
    res.render('home', { title: 'My Handlebars App', message: 'Welcome to Handlebars!' });
});

app.get('/',(req,res)=>{
    res.send('Hello Nikhil Devne')
})

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
