const Customer = require("../models/Customer");

const customerController = {
  //GET /api/customers
  index: async (req, res) => {
    const customers = await Customer.findAll();
    res.status(201).json(customers);
  },

  //GET /api/customers/:id
  select: async (req, res) => {
    const { id } = req.params;
    const customer = await Customer.findById(id);
    if (!customer)
      return res.status(404).json({ message: "Customer not found" });
    res.status(201).json(customer);
  },

  //POST /api/customers
  create: async (req, res) => {
    const { name, email } = req.body;
    const newCustomer = await Customer.create(name, email);
    res.status(201).json(newCustomer);
  },

  //PUT /api/customers/:id
  update: async (req, res) => {
    const { id } = req.params;
    const attributes = req.body;
    const updatedCustomer = await Customer.update(id, attributes);
    res.status(201).json(updatedCustomer);
  },

  //DELETE /api/customers/:id
  delete: async (req, res) => {
    const { id } = req.params;
    const result = await Customer.delete(id);
    res.json(result);
  },
};

module.exports = customerController;
