const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');

const app = express();
const port = process.env.PORT || 5002;

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'Garima@9',
  port: '3306',
  database: 'SRMWS', // Replace with your schema name
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to DB:', err);
  } else {
    console.log('Connected to DB');
  }
});

// Endpoint to get all products
app.get('/products', (req, res) => {
  const query = 'SELECT * FROM sample_table'; // Replace with your table name
  db.query(query, (err, results) => {
    if (err) {
      console.error('Error executing SQL query:', err);
      res.status(500).json({ error: 'Internal server error' });
    } else {
      res.json(results);
    }
  });
});

// Endpoint to get a product by ID
app.get('/product/:id', (req, res) => {
  const { id } = req.params;
  const query = 'SELECT * FROM sample_table WHERE id = ?'; // Replace with your table name
  db.query(query, [id], (err, results) => {
    if (err) {
      console.error('Error executing SQL query:', err);
      res.status(500).json({ error: 'Internal server error' });
    } else if (results.length === 0) {
      res.status(404).json({ error: 'Product not found' });
    } else {
      res.json(results[0]);
    }
  });
});

// Endpoint to create a new product
app.post('/products', (req, res) => {
  const { product, price, description } = req.body;
  const query = 'INSERT INTO sample_table (product, price, description) VALUES (?, ?, ?)'; // Replace with your table name
  db.query(query, [product, price, description], (err, results) => {
    if (err) {
      console.error('Error executing SQL query:', err);
      res.status(500).json({ error: 'Internal server error' });
    } else {
      const newProduct = { id: results.insertId, product, price, description };
      res.status(201).json(newProduct);
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});