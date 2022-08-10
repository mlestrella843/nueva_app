import express from 'express';

var app = express();

var callback = function(){
    console.log("Example app listening on port 4001");
}

app.listen(4001, callback);

app.get('/', function(req, res){
    res.send("<b>Yay .... </b> This is my first express http server");
});

app.get('/welcome', function(req, res){
    res.send('<b>Hello </b> Welcome to my http server with express');
})

app.get('/login', function(req, res){
    res.send('<p> username <input type= "text" /></p>    <p> password <input type= "text" />');
})