const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const jsonParser = bodyParser.json();
const app = express();

var usermodel = require("./user")

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));



app.get("/" , function(req, res){
    res.sendFile(__dirname + "/register.html"); 
});


// app.post("/login", function(req, res){
//     var firstName = req.body.firstname;
//     var lastName = req.body.lastname;
//     var password = req.body.signpassword;

//     console.log(firstName ,  lastName , password)

// } )

// app.get("/login", function(req, res){
//     res.sendFile(__dirname + "/login.html");
// })
// app.get("/success", function(req, res){
//     res.render("success")
// })


app.post("/",function(req,res){
    usermodel.create({
        firstname: req.body.firstName,
        lastname:req.body.lastName,
        signpassword:req.body.password
        
    }).then(function(createduser){
        res.sendFile(__dirname + "/success.html")
    })
})

// req.body.firstName!==dets.firstname || req.body.lastName!==dets.lastname || req.body.password !== dets.signpassword





app.listen(3000, function(){
    console.log("server is started at port number 3000")
}) 


//api key
//d07026e0d4fc93de257132b1cb859bd4-us21