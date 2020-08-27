const mongoose = require("mongoose");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

const feedbackRoutes = require('./feedbackroute');

//middlewares
app.use(bodyParser.json());
app.use(cors());

//port to run the app
const port = process.env.PORT||8000;

//db connect
mongoose.connect("mongodb://localhost:27017/session-manan",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).then(() => {
    console.log("DB CONNECTED");
})

//api endpoints or routes
app.use('/api',feedbackRoutes);


//author
app.get('/',(req,res)=>{
    return res.json({
        author : "Sayantanu Dey",
        description: "This endpoint is made for a tutorial session",
    })
})

//app start
app.listen(port, () => {
    console.log(`app is running at:`)
    console.log(`http://localhost:${port}`)
})