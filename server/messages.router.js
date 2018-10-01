const router = require('express').Router();
const pool = require('./modules/pool');

router.get('/', (req, res) => {
    pool.query(`SELECT * FROM "messages";`)
    .then( (results) => {
        res.send(results.rows);
    })
    .catch( (error) => {
        console.log('Error in messages GET', error);
        res.sendStatus(500);
    })
})

router.post('/', (req, res) => {
    pool.query(`INSERT INTO "messages" ("name", "message")
    VALUES ($1, $2);`, [req.body.name, req.body.message])
    .then( (results) => {
        res.sendStatus(201);
    })
    .catch( (error) => {
        console.log('Error in messages POST', error);
        res.sendStatus(500);
    })
})


module.exports = router;