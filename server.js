var express = require('express');
var mysql = require("mysql");
var connection = require("express-myconnection");
var app = express();

//Hosting static files
app.use(express.static(__dirname + '/'));
console.log("Static files initialized...");

// Create Sql Connection
app.use(connection(mysql, {
    host     : 'localhost',
    user     : 'cubic',
    password : 'cubictech123',
    database : 'cms'
},'request'));
console.log("Query Setup complete...")

//collection of services.
var services ={
    "companies":{
        "get":{
            "all":{
                "url":"/service/companies/all",
                "query":"SELECT * FROM companytbl"
            },
            "active":{
                "url":"/service/companies",
                "query":"SELECT * FROM companytbl WHERE active = 1"
            },
            "byId":{
                "url":"/service/companies/:companyid",
                "query":"SELECT * FROM companytbl where companyid = ?",
                "params":['companyid']
            }
        }   
    },
    "employees":{
        "get":{
            "all":{
                "url":"/service/employees/all",
                "query":"SELECT * FROM employeetbl"
            },
            "active":{
                "url":"/service/employees",
                "query":"SELECT * FROM employeetbl WHERE active = 1"
            },
            "byId":{
                "url":"/service/employees/:employeeid",
                "query":"SELECT * FROM employeetbl where employeeid = ?",
                "params":["employeeid"]
            }
        }    
    },
    "classes":{
        "get":{
            "all":{
                "url":"/service/classes/all",
                "query":"SELECT * FROM classtbl"
            },
            "active":{
                "url":"/service/classes",
                "query":"SELECT * FROM classtbl WHERE active = 1"
            },
            "byId":{
                "url":"/service/classes/:classid",
                "query":"SELECT * FROM classtbl where classid = ?",
                "params":['classid']
            }
        }    
    }
};
console.log("Service API collections instantiated...");

//Generating API from service collection
for(var key in services){
    for (var service in services[key]["get"]){
        if (service=="byId"){
            createGetServicesById(services[key]['get'][service].url,services[key]['get'][service].query,services[key]['get'][service].params)
        }
        else{
            createGetServices(services[key]['get'][service].url,services[key]['get'][service].query);
        }
        
    } 
} 
console.log("REST API modules ready for launch...")

//Function to create GET requests without ids
function createGetServices(url,query,params){
    console.log("Creating service for... " + url);
    app.get(url,function(req,res,next){
      req.getConnection(function(err, connection) {
        if (err) return next(err);
      
        connection.query(query, [], function(err, results) {
            if (err){
                console.log(err);
                return next("Mysql error, check your query");  
            }         
            res.json(results);
        });
      
      });
    });
}

function createGetServicesById(url,query,params){
    console.log("Creating service for... " + url);
    app.get(url,function(req,res,next){
        //Array to store dynamic parameters
        var ids = [];
        for (var i=0;i<params.length;i++){
            ids.push(req.params[params[i]]);
        }
   req.getConnection(function(err, connection) {
      if (err) return next(err);
      
      connection.query(query,ids, function(err, results) {
        if (err){
          console.log(err);
          return next("Mysql error, check your query");  
        }         
        res.json(results);
      });      
    });   
});
}


//Routes
app.get('/', function (req, res) {
    res.redirect('/src/main/index.html');
});

//Launching server
app.listen(8080, function (req,res) {
  console.log("Opening port 8080");    
  console.log('application launched at localhost:8080');
});

