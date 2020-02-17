
let express = require("express");

let mysql = require("mysql");

let cors = require("cors");

let bodyparser = require("body-parser");

let app=express();

app.use(cors());

app.use(bodyparser.json());

app.use(bodyparser.urlencoded({extended:false}));

let connection=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"test",
    database:"productsDetails"
})

connection.connect();

app.get("/product",(req,res)=>{
    connection.query(`select * from productsTable`,(err,records,fields)=>{
        if (err){
            throw err;
        } else{
            res.send(records);
        }
    });
});


app.post("/product",(req,res)=>{
    connection.query(`insert into productsTable values('${req.body.p_id}','${req.body.p_name}','${req.body.p_cost}')`,(err,result)=>{
        if(err){
            throw err;
        }else{
            res.send({insert:"sucess"});
        }
    })
})

//create the put request
app.put("/product",(req,res)=>{
    connection.query(`update productsTable set p_name='${req.body.p_name}',p_cost=${req.body.p_cost} where p_id=${req.body.p_id}`,
                    (err,result)=>{
        if(err) throw err;
        else{
           res.send({update:"success"});
        }
    });
});


app.delete("/product",(req,res)=>{
    connection.query(`delete from productsTable where p_id=${req.body.p_id}`,(err,result)=>{
        if(err){
            throw err;
        }
        else{
            res.send({delete:"sucess"});
        }
    });
})

app.listen(8080);

console.log('this is 8080');
