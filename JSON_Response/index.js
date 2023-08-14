//Espress JS Routing

var express = require("express");
app = express();

//JSON Array
let myArray = [
    {"Name": "Ahsan", "Roll": 1},
    {"Name": "Habib", "Roll": 2},
    {"Name": "Rahim", "Roll": 3}
]

app.get("/", (req, res)=>{
    res.json(myArray);
})


app.listen(3000, ()=>{
    console.log("Server Listening at Port 3000");
});