const express = require("express");
const port = 3000 //port number at which Express server will listen to incoming HTTP requests
const app = express();

app.get('/route-handler', function(req,res) {
    //headers, body, query param

    res.json({
        name : "nihal",
        age : 22
    })

})


app.get('/', function(req,res) {
    //db call
    res.send('<b>Hi there <b>')
})


app.listen(port, () => {
    console.log('Example app listening on port ${port}');
    
}) //starts the server