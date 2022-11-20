const express = require('express'); 
const app = express();
const port = 5000;
const path = require('path'); 

app.use(express.static(path.join(__dirname, 'public')));
// app.use(express.static(path.join(__dirname, 'pages')));


app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/public/pages/homepage.html')); 
})

app.get('/login.html', function (req, res) {
    res.sendFile(path.join(__dirname + '/public/pages/login.html')); 
})

app.listen(port); 
console.log('Running at Port 5000'); 
