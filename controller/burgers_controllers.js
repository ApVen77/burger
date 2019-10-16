var express= require("express");
var router= express.Router();
// var burgers= require(".../models/burger.js");
var burger = require("../models/burger")

router.get("/", function(req, res){

    res.redirect("/burgers")

}); 
router.get("/burgers", function(req, res){
    burger.selectAll(function(burgerData){
        res.render("index", {burgers: burgerData});
    })
})

router.post("/burgers/create", function(req,res){
    console.log("inside create route")
	burgers.insertOne([
		"burger_name"
		],[
			req.body.burger_name
			], function(data){
                console.log(data)
				res.redirect("/burgers");
			});
});

router.put("/burgers/update/:id", function(req,res){
	var condition = "id = " + req.params.id;
	console.log("condition", condition);

	burgers.updateOne({
		"devoured": req.body.devoured
	}, condition, function(data){
		res.redirect("/burgers")
	});
});

module.exports = router;
