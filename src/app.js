// const fs = require("fs");
// const express = require("express");
// const app = express();

// // Importing products from products.json file
// const products = JSON.parse(fs.readFileSync(`${__dirname}/data/products.json`));

// // Middlewares
// app.use(express.json());

// // Write GET endpoint for sending product to the client here
// // Endpoint - /api/v1/products/:name/:price

// module.exports = app;

const fs = require("fs");
const express = require("express");
const app = express();

// Importing products from products.json file
const products = JSON.parse(fs.readFileSync(`${__dirname}/data/products.json`));

// Middlewares
app.use(express.json());

app.get("/api/v1/products/:name/:price", (req, res) => {
  console.log(req.params);
  const { name, price } = req.params;
  const item = products.find(
    (item) => item.name == name && item.price == price
  );
  if (!item)
    res.status(404).json({ status: "failed", message: "Product not found!" });
  else {
    res.status(200).json({
      status: "success",

      message: "Product fetched successfully",

      data: {
        product: {
          ...item,
        },
      },
    });
  }
});
// Write GET endpoint for sending product to the client here
// Endpoint - /api/v1/products/:name/:price

module.exports = app;
