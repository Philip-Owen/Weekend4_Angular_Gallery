const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.get('/', (req,res) => {
    let queryText = `SELECT * FROM images ORDER BY id;`;
    pool.query(queryText)
        .then((results) => {
            console.log('GET results', results.rows);
            res.send(results.rows);
        })
        .catch((err) => {
            console.log('error making select request', err);
            res.sendStatus(500);
        });
});

module.exports = router;


