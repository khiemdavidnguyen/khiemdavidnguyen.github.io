var products_controller = require('../controllers/controllers');

module.exports = function(app) {
  app.get('/api/products', products_controller.products);
  app.get('/api/products/:id', products_controller.product_id);
  app.post('/api/products', products_controller.new);
  app.put('/api/products/:id', products_controller.product_update_id);
  app.delete('/api/products/:id', products_controller.delete);
}