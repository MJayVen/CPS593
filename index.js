const express = require("express");     // initialize express
const app = express();                  // to access express functions, use 'app' const
const path = require('path');           // indicates where 'public' files are

app.use(express.json()); // to parse all .json files into javascript

// '__dirname' means current directory
app.use(express.static(__dirname + "/public")); // indicates location of static files
app.get('/', (req, res) => res.sendFile(path.join(__dirname, '/public', 'index.html'))); // when user enters base url in browser, brings them to default homepage 

// CORS middleware, so that front and back end can communicate from different ports
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin,X-Requested-Width,Content-Type,Accept,Authorization");
    res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
    next();
});

const PORT = process.env.PORT || 3000; // server runs heroku port, otherwise on localhost port 3000
app.listen(PORT, () => console.log(`Server started on port ${PORT}!`)); // if we can successfully listen to our port, output to console
