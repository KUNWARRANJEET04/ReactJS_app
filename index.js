const express = require('express');
const { globalRouter } = require("./routes/global.routes");
const {connection} = require("./db/db_config");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());
const port = 3005;

app.use("/", globalRouter);

app.get('/', (req, res) => {
  const { id } = req.query;
  const query = 'SELECT * FROM products1 WHERE product_id = ?'; 
  connection.query(query, [id], (err, results) => {
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

app.listen(port, () => {
  console.log(`My app listening on port ${port}`);
});