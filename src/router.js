const { Router } = require("express");
const productsController = require("./controllers/products-controller");
const customerController = require("./controllers/customer-controller");
const ordersController = require("./controllers/orders-controller");

const router = Router();

router.get("/products", productsController.index);
router.get("/products/:id", productsController.select);
router.post("/products", productsController.create);
router.put("/products/:id", productsController.update);
router.delete("/products/:id", productsController.delete);

router.get("/customers", customerController.index);
router.get("/customers/:id", customerController.select);
router.post("/customers", customerController.create);
router.put("/customers/:id", customerController.update);
router.delete("/customers/:id", customerController.delete);

router.get("/orders", ordersController.index);
router.post("/orders", ordersController.create);
router.get("/orders/:id", ordersController.select);
router.delete("/orders/:id", ordersController.delete);

module.exports = router;
