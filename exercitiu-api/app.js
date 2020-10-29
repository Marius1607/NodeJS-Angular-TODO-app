const express = require("express");
const mongo = require('mongodb');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
let database = null;

async function initializeCollections(client) {
    database = client.db('exercitiu');
    await database.createCollection("todo");
}

app.use(cors());
app.use(bodyParser.json());

mongo.MongoClient.connect("mongodb://127.0.0.1", { useUnifiedTopology: true } , (error, client)=>{
    if(error){
        return console.log("Error connecting to database: ", error);
    }
    initializeCollections(client);

    app.listen(3000, () => {
        console.log("Server running on port 3000");
    });
});

app.get("/todo/", (req, res) => {
    database.collection('todo').find().toArray((err, results)=>{
        res.json(results.map((item) => {
            return { id:item._id, name:item.name };
        }));
    });
});

app.post("/todo/", (req, res) => {
    database.collection('todo').insertOne({name: req.body.todo}, (err, item) => {
        res.json({id: item.insertedId});
    });
});



app.delete("/todo/:id", (req, res) => {
    database.collection('todo').deleteOne({"_id": mongo.ObjectId(req.params["id"])}, (err) => {
        res.json({message: 'Entry deleted successfully'});
    });
});

app.delete("/todo/", (req, res) => {
    database.collection('todo').deleteMany({}, (err) => {
        res.json({message: 'All entries deleted successfully'});
    });
});
