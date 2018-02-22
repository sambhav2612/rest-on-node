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

mongoose.connect('mongodb://localhost:27017/products')
    .then(() => { console.log('Successfully connected to Mongo!') })
    .catch(() => { console.log('Successfully connected to Mongo!') });

router.use(function (req, res, next) {
    // auth and log
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
    p.quantity = req.body.quantity;
    p.image = req.body.image;

    p.save(function (err) {
        if (err) {
            res.send(err);
        }
        res.send({ message: req.body.title + ' generated!' });
    });
});

//read
router.route('/products').get(function (req, res) {
    product.find(function (err, products) {
        if (err) {
            res.send(err);
        }

        res.send(products);
    });
});

//read by ID
router.route('/products/:product_id').get(function (req, res) {
    product.findById(req.params.product_id, function (err, prod) {
        if (err) {
            res.send(err);
        }

        res.json(prod);
    });
});

//update (by ID)
router.route('/products/:product_id').put(function (req, res) {
    product.findById(req.params.product_id, function (err, prod) {
        if (err) {
            res.send(err);
        }

        // store the found object in instance called p
        var p = res;

        var title = p.title;

        prod.title = req.body.title;
        prod.price = req.body.price;
        prod.instock = req.body.instock;
        prod.quantity = req.body.quantity;
        prod.image = req.body.image;

        prod.save(function (err) {
            if (err) {
                res.send(err);
            }
            res.send({ message: title + ' updated!' });
        });

    });
});

//delete (by ID)
router.route('/products/:product_id').delete(function (req, res) {
    product.remove({ _id: req.param.product_id }, function (err, prod) {
        if (err) {
            res.send(err);
        }

        res.json({ message: req.param.title + ' successfully deleted!' });
    });
});

app.use(cors());
app.use('/api', router);
app.listen(port);

console.log('REST API running on port: ' + port);