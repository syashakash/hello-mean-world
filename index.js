let db = require("./database");
let msgModel = require("./model");
let app = require("express")();
let cors = require('cors');
let msg = new msgModel({
    name: 'first message',
    message: 'Hello World'
});

msg.save()
.then(doc => {
    console.log(doc);
}).catch(err => {
    console.log(err);
});

app.use(cors({
    'allowedHeaders': ['sessionId', 'Content-Type'],
    'exposedHeaders': ['sessionId'],
    'origin': '*',
    'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
    'preflightContinue': false
}));

msgModel.findOne({name: 'first message'}).then(doc => {
    app.get('/', (req,res) => {
        res.send(doc);
    });
}).catch(err => {
    console.log(err);
});

app.listen(3001);