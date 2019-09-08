const express = require('express')
const bodyParser = require('body-parser')

const toyService = require('./services/toy-service')
const app = express()

const cors = require('cors')

app.use(cors());

app.use(bodyParser.json())

app.use(express.static('dist'));





// User routes
const addUserRoutes = require('./routes/userRoute');
addUserRoutes(app);

// Auth routes
const addAuthRoutes = require('./routes/authRoute');
addAuthRoutes(app);


// Books routes
const addBookRoutes = require('./routes/bookRoute');
addBookRoutes(app)



// Listen to port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`shuvy test app listening on port ${PORT}!`));
