/* Sample Program */
//console.warn("Hello World");
//console.log("Hello World");
// var a=20;
// let b=30;
// const c=40;
// c=30;
// console.log(a+b+c);

/* JavaScript Fundementals */
// var a=20;
// if(a==20){
//     console.log("matched");
// }
// for(i=0; i<10; i++){
//     console.log(i)
// }
//import function and variables from one file to the another file
// const app=require('./app')
// let arr=[4,1,6,3,4,89,0];
//console.log(arr);
//console.log(arr[0]);
//console.log(app);
//console.log(app.xyz());
// const result=arr.filter((item)=>{
    //console.log(item)
    //return item===4
    // return item>4
//     return item>=4
// });
// console.warn(result);

/*Core Modules*/
// const fs=require('fs').writeFileSync;
// console.log("Code Step By Step");
// fs("hello.txt","Code Step By Step");
// fs.writeFileSync("abc.txt","Code Step By Step");
// console.log(__dirname);
// console.log(__filename);

/*Create Server*/
// const http = require('http');

// function dataControl(req,res){
//     res.write("<h1>Code Step By Step</h1>");
//     res.end();
// }

// const dataControl=(req,res)=>{
//     res.write("<h1>Code Step By Step</h1>");
//     res.end();
// }

// http.createServer((req,res)=>{
//     res.write("<h1>Hello World</h1>");
//     res.end();
// }).listen(4500); //function chaining in javascript

// http.createServer(dataControl).listen(4500);

// console.log("package.json");

// const colors=require('colors');
// console.log("hello".green);
// console.log("hello".bgBlue);

/*Nodemon module*/
// console.warn("Try Nodemon with node...");
// console.warn(20+20+30);

/*Simple API*/
// const http=require('http');
// const data=require('./data');
// http.createServer((req,res)=>{
//     res.writeHead(200,{'Content-Type':'application\json'});
//     res.write(JSON.stringify(data));
//     res.end();
// }).listen(5000);

/* Getting Input from command Line*/
//console.log(process.argv[2]);
//const fs=require('fs');
//const input=process.argv;
//fs.writeFileSync('hi.txt','This is dummy file');
//fs.writeFileSync(input[2],input[3]);
//if(input[2]=='add'){
//    fs.writeFileSync(input[3],input[4]);
//}
//else if(input[2]=='remove'){
//    fs.unlinkSync(input[3]);
//}
//else{
//    console.log("invalid input");
//}

/* Display File List from folder*/
//const fs=require('fs');
//fs.writeFileSync("Apple.txt",'a simple file');
//const path=require('path');
//const dirPath=path.join(__dirname, 'files');
//console.log(dirPath);
// for(i=0;i<5;i++){
//     fs.writeFileSync(`${dirPath}/hello${i}.txt`,"simple text in file");
// }
//fs.readdir(dirPath, (err,files)=>{
//    console.log(files);
//    files.forEach((item)=>{
//        console.warn("file name is: "+item);
//    })
//});

/*CRUD with file system*/
//const fs=require('fs');
//const path=require('path')
//const dirPath= path.join(__dirname,'crud');
//const filePath=`${dirPath}/apple.txt`
//fs.writeFileSync(filePath,"simple text file");
// fs.readFile(filePath, 'UTF-8', (err,item)=>{
//     console.log(item);
// })
// fs.appendFile(filePath,' and file name is apple.txt', (err)=>{
//     if(!err) console.log("file is updated");
// })
// fs.rename(filePath, `${dirPath}/fruit.txt`, (err)=>{
//     if(!err) console.log("file name is updated");
// })
//fs.unlinkSync(`${dirPath}/fruit.txt`)

/*Asynchronous programming Language */
//console.log("start exe...");

//console.log("logic exe...");

// setTimeout(()=>{
//     console.log("logic exe...");
// },2000)

//console.log("complete exe...");

// let a=20;
// let b=0;

// setTimeout(()=>{
//     b=30;
//     console.log("logic exe...");
// },2000)

// console.log(a+b);

/*Handling Asynchronous Pregramming Language */
// let a=20;
// let b=0;

// let waitingData=new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         resolve(30);
//         //console.log("logic exe...");
//     },2000)
// })

// waitingData.then((data)=>{
//     b=data
//     console.log(a+b);
// })

// console.log(a+b);

/*Node js architecture */

//Call stack
//node api
//callback queue

// console.log("starting up...");

//     setTimeout(()=>{
//         console.log("2 second wait...");
//     },2000)

//     setTimeout(()=>{
//         console.log("0 second wait...");
//     },0)

// console.log("finishing up...");

/*Express JS
Routing req and res params
render html and json
Make HTML Page
Remove extensions from url and 404 page
EJS template engine
Dynamic page with ejs
express js middleware
route level middleware express js */

// const express = require('express');
// const app = express();
// const reqFilter=require('./middleware');
// const route=express.Router();

// const reqFilter=(req,res,next)=>{
//     console.log("reqFilter");
//     if(!req.query.age){
//         res.send("Please provide your age");
//     }
//     else if(req.query.age<18){
//         res.send("You are under aged");
//     }
//     else{
//         next();
//     }
// }

//app.use(reqFilter);
//route.use(reqFilter);

//const path = require('path');
//const publicPath = path.join(__dirname,'public');

//app.set('view engine','ejs');


//console.log(publicPath);
//app.use(express.static(publicPath));

//
// app.get("",(req,res)=>{
//     //res.send('Welcome, This is a About Page');
//     //console.log(req.query.name); 
// //res.send('Welcome, '+req.query.name);
// res.send(`<h1>Welcome to Home Page</h1>
// <a href="/about">Go to About Page</a>`);

// });

// app.get("/about",(req,res)=>{
//     //res.send('Welcome, This is a About Page');
//     res.send(`<input type="text" placeholder="user name" value="${req.query.name}"/>
//     <button>Click</button>
//     <a href="/">Go to Home Page</a>`);
//     });

//     app.get("/help",(req,res)=>{
//         //res.send('Welcome, This is a Help Page');
//         res.send([
//             {
//             name:"peter",
//             email:"peter@test.com"
//             },
//             {
//                 name:"bruce", email:"bruce@test.com"
//             }
//         ]);
//         });

//console.log(__dirname);

// app.get('',(_,res)=>{
//     res.sendFile(`${publicPath}/index.html`)
// });

// app.get('/contact',(_,res)=>{
//     res.sendFile(`${publicPath}/about.html`)
// });

// app.get('/help',(_,res)=>{
//     res.sendFile(`${publicPath}/help.html`)
// });

// app.get('*',(_,res)=>{
//     res.sendFile(`${publicPath}/nopage.html`)
// });

//  app.get('/profile',(_,res)=>{
//     const user={
//         name:"Peter",
//         email:'peter@test.com',
//         country:'USA',
//         skills:["php","js","node.js","java", "c++"]
//     }
//     res.render('profile',{user});
//  });

//  app.get('/login',(_,res)=>{
//     res.render('login');
// });

// app.get('/', (req,res)=>{
//     res.send('Welcome to the Home Page');
// });

// app.get('/users', (req,res)=>{
//     res.send('Welcome to the Users Page');
// });

// route.get('/about', (req,res)=>{
//     res.send('Welcome to the About Page');
// });

// route.get('/contact', (req,res)=>{
//     res.send('Welcome to the Contact Page');
// });

// app.use('/',route);


//     app.listen(5000);

//mongodb database connection and CRUD opeartions

// const dbConnect=require('./mongodb'); 

// dbConnect.then((res)=>{
// console.log(res.find({name:'nord'}).toArray().then((data)=>{
//     console.log(data);
// }));
// });

// const main= async()=>{
//     //console.log("function called");
//     let data=await dbConnect;
//     data=await data.find({name:"nord"}).toArray();
//     console.log(data);
// }

// main();

//mongoose CRUD operations and GET, POST, PUT, DELETE API methods

// const mongoose = require('mongoose');

//     mongoose.connect('mongodb://localhost:27017/e-comm');
//     const productSchema = new mongoose.Schema({
//         name: String,
//         price: Number,
//         brand: String,
//         category: String
//     });

// const saveInDB = async()=>{
//     const Product = mongoose.model('products', productSchema);
//     let data = new Product({
//         name: "max 100",
//         price: 200,
//         brand: 'max',
//         category: 'Mobile'
//     });
//     const result = await data.save();
//     console.log(result);
// }

// const updateInDB =async  () => {
//     const Product = mongoose.model('products', productSchema);
//     let data =await  Product.updateOne(
//         { name: "max 100" },
//         {
//             $set: { price: 200,name:'max 6 pro' }
//         }
//     )
//     console.log(data);
// }

// const deleteInDB = async ()=>{
//     const Product = mongoose.model('products', productSchema);
//     let data = await Product.deleteOne({name:'max 121'})
//     console.log(data);
// }

// const findInDB = async ()=>{
//     const Product = mongoose.model('products', productSchema);
//     let data = await Product.find({name:'max 6 pro'})
//     console.log(data);
// }
// findInDB();

// const express = require('express');
// require("./config");
// const Product = require('./product');
// const app = express();

// app.use(express.json());
// app.post("/create", async (req, resp) => {
//     let data = new Product(req.body);
//     const result = await data.save();
//     resp.send(result);
// });

// app.get("/list", async (req, resp) => {
//     let data = await Product.find();
//     resp.send(data);
// })

// app.delete("/delete/:_id", async (req, resp) => {
//     console.log(req.params)
//     let data = await Product.deleteOne(req.params);
//     resp.send(data);
// })

// app.put("/update/:_id",async (req, resp) => {
//     console.log(req.params)
//     let data = await Product.updateOne(
//         req.params,
//         {$set: req.body}
//     );
//     resp.send(data);
// })

//Search API with multiple files
// app.get("/search/:key", async (req, resp) =>{
//     let data=await Product.find({
//         "$or": [
//             {name:{$regex:req.params.key}},
//             {brand:{$regex:req.params.key}}
//         ]
//     });
// resp.send(data);
// })

// app.listen(5000);

//Upload the file

// const express = require('express');
// const multer = require('multer');
// const app = express();

// const upload= multer({
//     storage: multer.diskStorage({
//         destination:function(req,file,cb){
//             cb(null,"uploads");
//         },
//         filename: function(req,file,cb){
//             cb(null,file.fieldname+"-"+Date.now()+".jpg");
//         }
//     })
// }).single('user_file');

// app.post('/upload', upload, (req, res)=>{
//     res.send("file upload");
// });

// app.listen(5000);

//const os=require('os');

//console.log(os.arch());
//console.log(os.freemem()/(1024*1024*1024));
//console.log(os.totalmem()/(1024*1024*1024));
//console.log(os.hostname());
//console.log(os.platform());
//console.log(os.userInfo());

// const express = require('express');

// const EventEmitter = require('events');

// const event=new EventEmitter();

// const app= express();

// let count=0;
// event.on("countAPIRequest",()=>{
//     count++;
//     console.log("Request count is: "+count);
// });

// app.get('/', (req, res)=>{
// res.send('basic api');
// event.emit("countAPIRequest");
// });

// app.get('/update', (req, res)=>{
//     res.send('update api');
//     event.emit("countAPIRequest");
// });

// app.get('/search', (req, res)=>{
//     res.send('search api');
//     event.emit("countAPIRequest");
// });

// app.listen(5000);

// const mysql= require("mysql");

// const con= mysql.createConnection({
//   host:"localhost",
//   user:"root",
//   password:"",
//   database:"test"
// });

// con.connect((err)=>{
//   if(err)
//   {
//     console.warn("not connect")
//   }else{
//     console.warn("connected!!!")
//   }
// })

// con.query("select * from users",(err,result)=>{
//     if(err)
//     {
//       console.warn("some error")
//     }
//     else{
//       console.warn(result)
//     }
//   })

const express = require("express");
const con = require("./config");
const app = express();
app.use(express.json);   


app.get("/", (req, resp) => {
  con.query("select * from users", (err, result) => {
    if (err) { resp.send("error in api") }
    else { resp.send(result) }
  })
});

app.post("/", (req, resp) => {
    //const data={name:'peter', password:'5050', user_type:'admin'};
    const data=req.body;
    con.query("Insert into users set?", data, (error, results, fields) => {
        if (error) throw error
        resp.send(result) 
      })
  });

  app.put("/:id",(req,resp)=>{
    const data= [req.body.name,req.body.password,req.body.user_type,req.params.id];
    con.query("UPDATE users SET name = ?, password = ?, user_type = ? WHERE id = ?",
    data,(error,results,fields)=>{
      if(error) throw error;
      resp.send(results)
    })
   
  })

  app.delete("/:id",(req,resp)=>{
    con.query("DELETE FROM users WHERE id="+req.params.id,(error,results)=>{
        if(error) throw error;
      resp.send(results);
    })
  })

app.listen("5000");