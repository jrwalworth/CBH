const ProductController = require('../controllers/product.controller');

module.exports = (app) => {
    app.get('/api/products', ProductController.getProducts);
    app.get('/api/products/:id', ProductController.getProductById);
    app.post('/api/products', ProductController.createProduct);
    app.put('/api/products/:id', ProductController.updateProduct);
    app.delete('/api/products/:id', ProductController.deleteProduct);
};