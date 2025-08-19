const express = require("express");
const port = 3000 //port number at which Express server will listen to incoming HTTP requests
const app = express();


app.post('/conversation', (req, res) => {
    console.log(req.body); 
    
    console.log(req.headers);
    
    res.send({
        msg : "2 + 2 = 4"
    })
})


app.get('/route-handler', function(req,res) {
    //headers, body, query param
    res.json({
        name : "nihal",
        age : 22
    })
})


app.get('/', function(req,res) {
    //db call
    setTimeout(function() {
        res.send('<b>Hi there <b>')
    }, 1000)
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
}) //starts the server