const{MongoClient} = require('mongodb');
//const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';
const databaseName='e-comm';
const client=new MongoClient(url);

async function dbConnect(){
    let result= await client.connect();
    db=result.db(databaseName);
    return db.collection('products');
    // let data = await collection.find({}).toArray();
    // console.log(data);
}

module.exports=dbConnect();