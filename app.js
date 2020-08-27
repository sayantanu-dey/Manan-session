const cheerio = require('cheerio');
const fs = require("fs")
const mongoose = require("mongoose");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

const feedbackRoutes = require('./feedbackroute');

//middlewares
const {getAllFeeds} = require("./feedbackcontroller");

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




//consume the api
app.get('/',getAllFeeds,(req,res)=>{
    let feeds = req.feedbacks;
    var html = fs.readFileSync(__dirname + '/index.html', 'utf8');
    let toinjecthtml = "";
    feeds.forEach((feed) => {
        let litag = `<li><div><span>${feed.firstname}</span><br>${feed.createdAt}<br><br>${feed.feedback}</div></li>`
        toinjecthtml += litag;
    })
    var $ = cheerio.load(html);
    $('ul').append(toinjecthtml);
    res.send($.html());

})

//app start
app.listen(port, () => {
    console.log(`app is running at:`)
    console.log(`http://localhost:${port}`)
})