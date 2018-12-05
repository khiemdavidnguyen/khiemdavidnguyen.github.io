var Product = require('../models/products');

module.exports = {
  products: function(req, res){
    Product.find({}, function(err,products){
      res.json({err: err, products: products});
    });
  },
  new: function(req, res){
    console.log('notcreated')
    console.log(req.body)
    var product = new Product({name: req.body.name, type: req.body.type, description: req.body.description, skill1: req.body.skill1, skill2: req.body.skill2, skill3: req.body.skill3 });
    product.save(function(err, product) {
      console.log('created')
      res.json({err: err, product: product});
    });
  },
  delete: function(req, res){
    Product.findByIdAndRemove(req.params.id, function(err,product){
      res.json({err: err, product: product});
    });
  },
  product_id: function(req, res){
    Product.findById(req.params.id, function(err,product){
      res.json({err: err, product: product});
    });
  },
  product_update_id: function(req, res){
    console.log("enterUpdate")
    Product.findOneAndUpdate({ _id:req.params.id},{$set:{name:req.body.name, type:req.body.type, description:req.body.description, skill1: req.body.skill1, skill2: req.body.skill2, skill3: req.body.skill3 } }, function(err,product){
      console.log('updated')
      console.log(req.params)
      console.log(req.body)
      res.json({err: err, product: product});
      console.log(err)
    })
  },
}
