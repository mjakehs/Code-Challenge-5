const Pool =  require('pg').Pool;

const pool = new Pool({
    database: 'message_board',
    host: 'localhost',
    port: 5432,
    max: 10,
    idleTimeoutMillis: 300000
})

pool.on('connect', () => {
    console.log('Postgesql connected');
});

pool.on('error', (err) => {
    console.log('Unexpected error on idle client', err);
    process.exit(-1);
});

module.exports = pool;