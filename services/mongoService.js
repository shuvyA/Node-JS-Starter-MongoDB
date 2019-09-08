var dbConn = null;

function connectToMongo() {
    // Reuse existing connection if exist
    if (dbConn) return Promise.resolve(dbConn);
    const MongoClient = require('mongodb').MongoClient;

    // const url = (!process.env.PORT)
    //     ? 'mongodb://localhost:27017/toy_db'
    //     : 'mongodb://shuvy:@.mlab.com:59812/shuvy-test'


    const url = 'mongodb://shuvy:@mlab.com:59812/shuvy-test';

    return MongoClient.connect(url)
        .then(client => {
            console.log('Connected to MongoDB');

            // If we get disconnected (e.g. db is down)
            client.on('close', () => {
                console.log('MongoDB Disconnected!');
                dbConn = null;
            })
            dbConn = client.db()
            return dbConn;
        })
}

module.exports = {
    connect: connectToMongo
}
