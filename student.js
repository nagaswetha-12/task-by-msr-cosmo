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

router.get("/getAllStudents",function(request,response){
    db.collection("students").find().toArray(function(err,results){
        if(err){
            console.log(err);
            return;
        }
        response.send(results);
    })
});

router.post("/insertStudent",function(request,response){
    db.collection("students").insert(request.body,function(err,results){
        if(err){
            console.log(err);
            return;
        }
        response.send({"msg":"insertion success"});
    })
});

module.exports = router;