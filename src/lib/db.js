import mysql from 'mysql2';

// Create a connection pool to MySQL database
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'outlier',
});

export default pool.promise();  // Returning the pool with promises
