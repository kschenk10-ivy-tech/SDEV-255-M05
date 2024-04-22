const express = require('express');
const { Pool } = require("pg");
const app = express();

app.listen(3000);

function makeDBConnectionPool(dbName) {
    //Understanding the details is not important here.
    return new Pool({
        database: dbName,
    });
}

const pool = makeDBConnectionPool("omdb");

// display results from db query in the browser
app.get('/', (req, res) => {
    pool
        .query("select name from movies where name like 'The %' limit 10") //queries DB
        .then((results) => { // takes results from query to db
            res.json(results.rows); // sends result from query to browser
        });
});