//First Espress App

var express = require("express");
app = express();

app.get("/", (req, res)=>{
    res.send("Hello Express JS!");
})

app.listen(3000, ()=>{
    console.log("Server Listening at Port 3000");
});