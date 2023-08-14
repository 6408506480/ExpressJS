//Espress JS Routing

var express = require("express");
app = express();

app.get("/", (req, res)=>{
    res.send("This is Home Page");
})

app.get("/about", (req, res)=>{
    res.send("This is About Page");
})

app.get("/contact", (req, res)=>{
    res.send("This is Contact Page");
})

app.listen(3000, ()=>{
    console.log("Server Listening at Port 3000");
});