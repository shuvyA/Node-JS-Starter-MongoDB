const ObjectId = require('mongodb').ObjectId;

const mongoService = require('./mongoService') 


mongoService.connect
function query() {
    return mongoService.connect()
        .then(db => {
            const collection = db.collection('toy');
            return collection.find({}).toArray()
        })
}

function remove(toyId) {
    toyId = new ObjectId(toyId)
    return mongoService.connect()
        .then(db => {
            const collection = db.collection('toy');
            return collection.remove({ _id: toyId })
        })
}
function getById(toyId) {
    toyId = new ObjectId(toyId)
    return mongoService.connect()
        .then(db => {
            const collection = db.collection('toy');
            return collection.findOne({ _id: toyId })
        })
}

function add(toy) {
    console.log(toy, 'service add sql dear');
    
    return mongoService.connect()
        .then(db => {
            const collection = db.collection('toy');
            return collection.insertOne(toy)
                .then(result => {
                    toy._id = result.insertedId;
                    return toy;
                })
        })
}

function update(toy) {
    toy._id = new ObjectId(toy._id)
    return mongoService.connect()

        .then(db => {
            const collection = db.collection('toy');
            return collection.updateOne({ _id: toy._id }, { $set: toy })
                .then(result => {
                    return toy;
                })
        })
}

module.exports = {
    query,
    remove,
    getById,
    add,
    update
}

// function connectdb() {
//     const MongoClient = require('mongodb').MongoClient;
//     const url = 'mongodb://localhost:27017';
//     const dbName = 'toy_db';
//     return MongoClient.connect(url)
//         .then(client => client.db(dbName))
// }



















