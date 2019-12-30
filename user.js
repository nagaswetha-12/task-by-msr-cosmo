var express = require("express");

var router = express.Router();

var  mongodb = require("mongodb");

var db;

mongodb.connect("mongodb://localhost:27017",function(err,client){
    if(err){
        console.log(err);
        return;
    }
    db = client.db("batch36");
})

router.post("/register",function(request,response){
    db.collection("users").insert(request.body,function(err,result){
        if(err){
            console.log(err);
            response.status(500).send({"msg":"registration failed"});
        }
        else{
            response.status(200).send({"msg":"registration success"}); 
        }
    })
})

router.post("/login",function(request,response){
    db.collection("users").find({"username":request.body.username,"password":request.body.password}).toArray(function(err,results){
        if(err){
            console.log(err);
            response.status(500).send({"msg":"login failed"});
        }
        else{
            console.log(results);
            if(results.length==1)
                response.status(200).send({"msg":"login success"}); 
            else
                response.status(500).send({"msg":"login failed"});
        }
    })
})

module.exports = router;