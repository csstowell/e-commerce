// importing packages

const express = require('express');
const admin = require('firebase-admin');
const bcrypt = require('bcrypt');
const path = require("path");


// declare public folder a static path
let staticPath = path.join(__dirname, "public");


// initialize express server
const app = express();

// middlewares - app.use method to make static path
app.use(express.static(staticPath));


// routes
// home route
app.get("/", (req, res) => {
    res.sendFile(path.join(staticPath, "public", "index.html"));
})

// signup route
app.get('/signup', (req, res) => {
    res.sendFile(path.join(staticPath, "signup.html"));
})



// 404 route -- middlewares 
app.get('/404', (req, res) => {
    res.sendFile(path.join(staticPath, "404.html"));
})

app.use((req,res) => {
    res.redirect('/404');
})




// make server listen on port 3000
app.listen(3000, () => {
    console.log('listening on port 3000.......');
})


