var config = require("./config");
var mongo_client = require("mongodb").MongoClient;



mongo_client.connect(config.mongodb_url, function(err, db){
    if(err){
        console.log("Somthing went wrong");
    }
    else{
        // try to connect insert the data into the database
        db.collection("test").insert({
        "address" : {
            "street" : "2 Avenue",
            "zipcode" : "10075",
            "building" : "1480",
            "coord" : [ -73.9557413, 40.7720266 ]
        },
        "borough" : "Manhattan",
        "cuisine" : "Italian",
        "grades" : [
            {
                "date" : new Date("2014-10-01T00:00:00Z"),
                "grade" : "A",
                "score" : 11
            },
            {
                "date" : new Date("2014-01-16T00:00:00Z"),
                "grade" : "B",
                "score" : 17
            }
        ],
        "name" : "Vella",
        "restaurant_id" : "41704620"
        }, function(err, result){
            console.log("the data has been inserted in test collection of ambi database");
        });
        console.log("Connected to Database succesfully");
        db.close();
    }
});