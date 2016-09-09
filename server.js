var express = require('express');
var bodyParser = require('body-parser');
var mysql = require("mysql");
var connection = require("express-myconnection");
var app = express();

app.use(bodyParser.json());  //to support JSON-encoded bodies
app.use(bodyParser.urlencoded({ //to support URL-encoded bodies
    extended:true
}));

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
                "query":"SELECT * FROM companytbl",
                "params":[]
            },
            "active":{
                "url":"/service/companies",
                "query":"SELECT * FROM companytbl WHERE active = 1",
                "params":[]
            },
            "byId":{
                "url":"/service/companies/:companyid",
                "query":"SELECT * FROM companytbl where companyid = ?",
                "params":['companyid']
            }
        },
        "post":{
            "url":"/service/companies",
            "query":"INSERT INTO companytbl SET ?",
            "params":[]
        }
    },
    "employees":{
        "get":{
            "all":{
                "url":"/service/employees/all",
                "query":"SELECT * FROM employeetbl",
                "params":[]
            },
            "active":{
                "url":"/service/employees",
                "query":"SELECT * FROM employeetbl WHERE active = 1",
                "params":[]
            },
            "byId":{
                "url":"/service/employees/:employeeid",
                "query":"SELECT * FROM employeetbl where employeeid = ?",
                "params":["employeeid"]
            }
        },
        "post":{
            "url":"/service/employees",
            "query":"INSERT INTO employeetbl SET ?",
            "params":[]
        }
    },
    "categorytype":{
        "get":{
            "all":{
                "url":"/service/categorytype/all",
                "query":"SELECT * FROM employeetbl",
                "params":[]
            },
            "active":{
                "url":"/service/categorytype",
                "query":"SELECT * FROM categorytypetbl WHERE active = 1",
                "params":[]
            },
            "byId":{
                "url":"/service/categorytype/:categorytypeid",
                "query":"SELECT * FROM categorytypetbl where categorytypeid = ?",
                "params":["categorytypeid"]
            }
        },
        "post":{
            "url":"/service/categorytype",
            "query":"INSERT INTO categorytypetbl SET ?",
            "params":[]
        }
    },
    "classes":{
        "get":{
            "all":{
                "url":"/service/classes/all",
                "query":"SELECT * FROM classtbl",
                "params":[]
            },
            "active":{
                "url":"/service/classes",
                "query":"SELECT * FROM classtbl WHERE active = 1",
                "params":[]
            },
            "byId":{
                "url":"/service/classes/:classid",
                "query":"SELECT * FROM classtbl where classid = ?",
                "params":['classid']
            }
        },
        "post":{
            "url":"/service/classes",
            "query":"INSERT INTO classtbl SET ?",
            "params":[]
        }
    },
    "workstatus":{
        "get":{
            "all":{
                "url":"/service/workstatus/all",
                "query":"SELECT * FROM workstatustbl",
                "params":[]
            },
            "active":{
                "url":"/service/workstatus",
                "query":"SELECT * FROM workstatustbl WHERE active = 1",
                "params":[]
            },
            "byId":{
                "url":"/service/workstatus/:workstatusid",
                "query":"SELECT * FROM workstatustbl where companyid = ?",
                "params":['workstatusid']
            }
        },
        "post":{
            "url":"/service/workstatus",
            "query":"INSERT INTO workstatustbl SET ?",
            "params":[]
        }
    },
    "education":{
        "get":{
            "all":{
                "url":"/service/education",
                "query":"SELECT * FROM educationtbl",
                "params":[]
            },
            "byId":{
                "url":"/service/education/:educationid",
                "query":"SELECT * FROM educationtbl where companyid = ?",
                "params":['educationid']
            }
        },
        "post":{
            "url":"/service/education",
            "query":"INSERT INTO educationtbl SET ?",
            "params":[]
        }
    }
};
console.log("Service API collections instantiated...");

//Generating API from service collection
for(var key in services){
    if (services[key].hasOwnProperty('post')){
        createPostServices(services[key].post.url,services[key].post.query,services[key].post.params);   
    }
    
    //Creating rest services for different properties in the GET object
    if (services[key].hasOwnProperty('get')){
        for (var service in services[key]["get"]){
            createGetServices(services[key]['get'][service].url,services[key]['get'][service].query,services[key]['get'][service].params); 
        } 
    }
    
} 
console.log("REST API modules ready for launch...");

//Function to create get services
function createGetServices(url,query,params){
    console.log("Creating GET services for... " + url);
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

function createPostServices(url,query,params){
    console.log("Creating POST services for... " + url);
    app.post(url,function(req,res,next){
        var reqObj = req.body;
        req.getConnection(function(err, connection){
            if (err) return next(err);
            var queryx =connection.query(query,reqObj,function(err,results){
                if (err){
                    console.log(err);
                    return next("Mysql error, check your query ");  
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

