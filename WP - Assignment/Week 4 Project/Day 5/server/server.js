var express = require('express')

var bodyParser = require('body-parser')

var mongoose = require('mongoose')

var cors = require('cors')


var Users = require('./models/User');
var Members = require('./models/Members');
var ProductsClothing = require('./models/clothing');
var ProductsBeauty = require('./models/beauty');
var ProductsFootwear = require('./models/footwear');


var app = express();
var router = express.Router();
app.use(cors())
jsonParser = bodyParser.json();

mongoose.connect('mongodb://test:pra1nav@ds117545.mlab.com:17545/todo_list_db',{ useNewUrlParser: true });

var connection = mongoose.connection;

connection.once('open',function(){
    console.log('connected to db')
})

// to register a user
router.post('/user/add', jsonParser, (req,res) => {
    console.log(req.body.number);
    console.log(req.body + "hello");
    let user = new Users(req.body);
    user.save()
    .then (user => {
        res.status(200).json({'user':'Added Succesfuly'});
    })
    .catch(err => {
        res.status(400).send('Failed to create an entry in the db')
    })
});

// user login
router.post('/user/login', jsonParser, (req,res) => {
    console.log(req.body);
    Members.findOne({email : req.body.email, password : req.body.password},function(err, result){
        if(err) {
            throw err;
        }
        if(result) {
            guessOrUser = result._id;
            res.send(true);
        } 
    });
    console.log('logged in');
});

// components
router.route('/getClothingProducts').get(function(req,res) {
    ProductsClothing.find({},function(err,data) {
        if(err) throw err;
        res.json(data);
    })
});

router.get('/getBeautyProducts', jsonParser, function(req,res) {
    ProductsBeauty.find({},function(err,data) {
        if(err) throw err;
        res.json(data);
    })
});

router.route('/getFootwearProducts').get(function(req,res) {
    ProductsFootwear.find({},function(err,data) {
        if(err) throw err;
        res.json(data);
    })
});

// product display
router.post('/getClothingProduct', jsonParser, function(req,res) {
    console.log(req.body.id);
    ProductsClothing.findOne({id:req.body.id}, function(err,data) {
        if(err) throw err;
        console.log('data from db = '+ data);
        res.json(data);
    })
});

router.post('/getBeautyProduct', jsonParser, function(req,res) {
    console.log(req.body);
    ProductsBeauty.findOne({id:req.body.id}, function(err,data) {
        if(err) throw err;
        console.log('data from db = '+data);
        res.json(data);
    })
});

router.post('/getFootwearProduct', jsonParser, function(req,res) {
    console.log(req.body.id);
    ProductsFootwear.findOne({id:req.body.id}, function(err,data) {
        if(err) throw err;
        res.json(data);
    })
});

// router.post('/product/comment',jsonParser,function(req,res){
//     console.log(req.body);
//     ProductsClothing.find({id:req.body.id}, function(err,data) {
//         console.log(req.body);
//         name = data[0].name;
//         ProductsClothing.updateMany({id:req.body.id}, {$push: { comments : [{name:name,comment:req.body.comment}]}}, function(err,data) {
//             res.json("Comment Posted Successfully");
//         });
//     });
// });

// router.route('/user/addcart').post(function(req,res) {
//     // console.log(req.body);
//     Users.update({_id : req.body.userid},{ $push : { cart : req.body.prodid}}, function(err, data){
//         if(req.body.userid != "guest") {
//             res.send(true);
//         } else {
//             res.send(false);
//         }
//     });
// });

app.use('/',router);

app.listen(4000,function(){
    console.log('Server listening on port 4000')
});

