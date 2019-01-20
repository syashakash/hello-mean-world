let mongoose = require("mongoose");

const server = "127.0.0.1:27017";
const database = "textDB";

class Database {
    constructor() {
        this._connect();
    }

    _connect() {
        mongoose.connect(`mongodb://${server}/${database}`, {useNewUrlParser: true}).then(
            () => {
                console.log("Database Connection Successful");    
            }).catch(err => {
                console.error("Database connection error");
        });
    }
}

module.exports = new Database();