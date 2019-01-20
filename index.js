let db = require("./database");
let msgModel = require("./model");
let app = require("express")();

let msg = new msgModel({
    name: 'first message',
    message: 'Hello World'
});

msg.save().then(doc => {
    console.log(doc);
}).catch(err => {
    console.log(err);
});

msgModel.find({name: 'first message'}).then(doc => {
    app.get('/', (req,res) => {
        res.send(doc);
    })
}).catch(err => {
    console.log(err);
});

app.listen(3000);