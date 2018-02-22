var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');

var app = express();

var mongoose = require('mongoose');

var product = require('./product');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8888;
var router = express.Router();

mongoose.connect('mongodb://localhost:27017/products');

router.use(function (req, res, next) {
    console.log('');
    next();
});

//create
router.route('/products').post(function (req, res) {
    // create a new instance of product model
    var p = new product();
    p.title = req.body.title;
    p.price = req.body.price;
    p.instock = req.body.instock;
    p.image = req.body.image;

    p.save(function (err) {
        if (err) {
            res.send(err);
        }
        res.send({ message: p.title +  ' Generated!' });
    });
});

//read
router.route('/products').get(function (req, res) {
    product.find(function (err, products){
        if (err) {
            res.send(err);
        }

        res.send(products);
    });
});

//read by ID
router.route('/products/:product_id').get(function (req, res) {
    product.findById(req.params.product_id, function (err, prod){
        if (err) {
            res.send(err);
        }

        res.json(prod);
    });
});

//update
router.route('/products').put(function (req, res) {

});

//delete
router.route('/products').delete(function (req, res) {

});

app.use(cors());
app.use('/api', router);
app.listen(port);

console.log('REST API running on port: ' + port);