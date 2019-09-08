const ObjectId = require('mongodb').ObjectId;

const mongoService = require('./mongoService') 


mongoService.connect
function query() {
    return mongoService.connect()
        .then(db => {
            const collection = db.collection('books');
            return collection.find({}).toArray()
        })
}

function remove(bookId) {
    bookId = new ObjectId(bookId)
    return mongoService.connect()
        .then(db => {
            const collection = db.collection('books');
            return collection.remove({ _id: bookId })
        })
}
function getById(bookId) {
    bookId = new ObjectId(bookId)
    return mongoService.connect()
        .then(db => {
            const collection = db.collection('books');
            return collection.findOne({ _id: bookId })
        })
}

function add(book) {
    console.log(book, 'service add sql dear');
    
    return mongoService.connect()
        .then(db => {
            const collection = db.collection('books');
            return collection.insertOne(book)
                .then(result => {
                    book._id = result.insertedId;
                    return book;
                })
        })
}

function update(book) {
    book._id = new ObjectId(book._id)
    return mongoService.connect()

        .then(db => {
            const collection = db.collection('books');
            return collection.updateOne({ _id: book._id }, { $set: book })
                .then(result => {
                    return book;
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






