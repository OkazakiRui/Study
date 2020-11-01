const express = require('express'),
mysql = require('mysql');

const app = express();

app.use(express.static('public'));
// app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({extended:false}))

const connection = mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'273568',
  database:'memos'
});

connection.connect((err)=>{
  if(err){
    console.log("コネクトエラー : " + err.stack);
    return;
  }
  console.log("successだよ");
})

app.get("/", (req, res) => {
  res.render("top.ejs");
});

app.get("/index",(req,res) => {
  connection.query(
    "select * from memos",
    (error,results)=>{
      // console.log(results);
      // console.log(memos);
      res.render("index.ejs",{items:results})
    }
  )
})

app.get("/new",(req,res)=>{
  res.render("new.ejs");
})

app.post("/create",(req,res)=>{
  // console.log(req.body.itemName);
  connection.query(
    "insert into memos(items) values (?)",
    [req.body.itemName],
    (error,results)=>{
      res.redirect("/index");
    }
    );
  });
  
  app.post("/delete/:id",(req,res)=>{
    connection.query(
      "delete from memos where id = ?",
      [req.params.id],
    (error,results)=>{
      res.redirect("/index");
    }
  );
});

app.get("/edit/:id",(req,res) => {
  connection.query(
    "select * from memos where id = ?",
    [req.params.id],
    (error, results)=>{
      res.render("edit.ejs",{item:results[0]})
    }
  )
})

app.post("/update/:id",(req,res) => {
  connection.query(
    "update memos set items = ? where id = ?",
    [req.body.itemName, req.params.id],
    (error, results)=>{
      res.redirect("/index")
    }
  )
})


app.listen(3000);