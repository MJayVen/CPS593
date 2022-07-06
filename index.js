require("dotenv").config();
const express = require("express");     // initialize express
const app = express();                  // to access express functions, use 'app' const
const mongoose = require("mongoose");   // initialize mongoose
const path = require('path');           // indicates where 'public' files are

const userRoutes = require('./server/routes/user');  // indicates where user router file is
const postRoutes = require('./server/routes/post');  // indicates where post router file is

mongoose.connect(process.env.dbURL)
    .then(console.log("DB CONNECTED (woo)"))
    .catch(error => console.log(error));

app.use(express.json()); // to parse all .json files into javascript

// '__dirname' means current directory
app.use(express.static(__dirname + "/client/build")); // indicates location of static files
app.get('/', (req, res) => res.sendFile(path.join(__dirname, '/client/build', 'index.html'))); // when user enters base url in browser, brings them to default homepage 

// CORS middleware, so that front and back end can communicate from different ports
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin,X-Requested-Width,Content-Type,Accept,Authorization");
    res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
    next();
});

// in order to use user router functions, must begin with '/<model>'
app.use('/user', userRoutes);
app.use('/post', postRoutes);

const PORT = process.env.PORT || 5000; // server runs heroku port, otherwise on localhost port 3000
app.listen(PORT, () => console.log(`Server started on port ${PORT}!`)); // if we can successfully listen to our port, output to console
