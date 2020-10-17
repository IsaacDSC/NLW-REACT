import mysql from 'mysql'

export const connection = mysql.createConnection({
    host: 'localhost',
    user: 'dev',
    password: 'secret',
    database: 'nlw'
})


