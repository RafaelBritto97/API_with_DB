const { query } = require("../database");

class Customer {
  constructor(customerRow) {
    this.id = customerRow.id;
    this.name = customerRow.name;
    this.email = customerRow.email;
    this.createdAt = new Date(customerRow.created_at);
    this.updatedAt = new Date(customerRow.updated_at);
  }

  static async findAll() {
    const { rows } = await query(`SELECT * FROM customers`);
    return rows.map((row) => new Customer(row));
  }

  static async findById(id) {
    const { rows } = await query(`SELECT * FROM customers WHERE id = $1`, [id]);
    if (!rows) return null;
    return new Customer(rows[0]);
  }

  static async create(name, email) {
    const customer = await query(
      `INSERT INTO customers (name, email)
        VALUES ($1, $2)
        RETURNING *`,
      [name, email]
    );

    return new Customer(customer.rows[0]);
  }

  static async update(id, attributes) {
    const { rows } = await query(`SELECT * FROM customers WHERE id = ${id}`);
    if (!rows[0]) return null;
    const customer = new Customer(rows[0]);
    Object.assign(customer, attributes);
    customer.updatedAt = new Date();

    await query(
      `UPDATE customers SET
        name = $1,
        email = $2,
        updated_at = CURRENT_TIMESTAMP
        WHERE id = $3`,
      [customer.name, customer.email, customer.id]
    );

    return customer;
  }

  static async delete(id) {
    await query(`DELETE FROM customers WHERE id = ${id}`);
    return { message: "Customer deleted successfully" };
  }
}

module.exports = Customer;
