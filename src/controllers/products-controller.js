const Product = require("../models/Product");

const productsController = {
  // GET /api/products
  index: async (req, res) => {
    const products = await Product.findAll();
    res.json(products);
  },
  //GET /api/products/:id
  select: async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: "Product not found" });
    res.status(200).json(product);
  },
  //POST /api/products
  create: async (req, res) => {
    const newProduct = await Product.create(req.body);
    res.status(201).json(newProduct);
  },
  //PUT /api/products/:id
  update: async (req, res) => {
    const { id } = req.params;
    const updatedProduct = await Product.update(id, req.body);
    res.status(200).json(updatedProduct);
  },
  //DELETE /api/products/:id
  delete: async (req, res) => {
    const { id } = req.params;
    const result = await Product.delete(id);
    res.status(204).json(result);
  },
};

module.exports = productsController;
