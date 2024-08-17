const mongodb = require('mongodb');
const mongoClient = mongodb.MongoClient;
let database;
async function connectDb(){
  const client = await mongoClient.connect('mongodb+srv://ashwin:ashwinashwin@cluster0.ddhln6v.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
  database = client.db('exam-management-portal');

}

function getDb(){
  if(!database) throw{message: "Cannot connect to database!"};
  return database;
}
module.exports={connectToDatabase: connectDb, getDb: getDb};
