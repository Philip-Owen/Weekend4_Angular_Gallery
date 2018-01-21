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

router.put('/:id', (req,res) => {
    let queryText = `UPDATE images SET view_count = (view_count + 1) WHERE id = $1`;
    pool.query(queryText,[req.params.id])
        .then((results) => {
            console.log('PUT results', results);
            res.send(200);
        })
        .catch((err) => {
            console.log('error making update request', err);
            res.sendStatus(500);
        });
})

module.exports = router;


