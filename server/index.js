const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')


require('dotenv/config')

const app = express()

// middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
// Used with react
app.use(cors({
    origin: 'http://localhost:3000'
}));
const watchRoute = require('./routes/watchbands')
// routes
const userRoute = require('./routes/users')
const authRoute = require('./routes/auth')
app.use(userRoute)
app.use(authRoute)
app.use(watchRoute)

mongoose.connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'test', 
}).then(() => console.log("Connected to test DB"))
    .catch((err) => {
        console.log("No Connection. Reason: " + err);
    });

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => { console.log(`Server started at port: ${PORT}`)})

