const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

// GET routes
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

// POST routes
router.post('/', (req,res) => {
    let queryText = `INSERT INTO comments (username, comment, image_id) VALUES ($1, $2, $3)`;
    pool.query(queryText, [req.body.username, req.body.comment, req.body.image_id])
        .then((results) => {
            console.log('insert response', results);
            res.sendStatus(201);          
        })
        .catch((err) => {
            console.log('error making insert request', err);
            res.sendStatus(500);
        });
});


module.exports = router;