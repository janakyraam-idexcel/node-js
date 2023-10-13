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

const express = require('express');
const app = express();
const reqFilter=require('./middleware');
const route=express.Router();

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
route.use(reqFilter);

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

app.get('/', (req,res)=>{
    res.send('Welcome to the Home Page');
});

app.get('/users', (req,res)=>{
    res.send('Welcome to the Users Page');
});

route.get('/about', (req,res)=>{
    res.send('Welcome to the About Page');
});

route.get('/contact', (req,res)=>{
    res.send('Welcome to the Contact Page');
});

app.use('/',route);


    app.listen(5000);