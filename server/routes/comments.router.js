const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');


router.get('/:id', (req,res) => {
    let queryText = `SELECT * FROM comments WHERE image_id = $1`;
    pool.query(queryText,[req.params.id])
        .then((results) => {
            console.log('select response', results);
            res.send(results.rows);            
        })
        .catch((err) => {
            console.log('error making select request', err);
            res.sendStatus(500);
        });
});


module.exports = router;