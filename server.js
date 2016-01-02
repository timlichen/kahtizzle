var express = require('express');
var app = express();

//Body Parser
var bodyParser = require('body-parser');
// get rids of deprecated message: {extended: true}
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
//Static
app.use(express.static(__dirname + '/static'));

//Session
var session = require('express-session');

app.use(session({
  secret: 'asdf',
  resave: false,
  saveUninitialized: true,
  // secure: true, -- this in the cookie object kills the session ID
  cookie: {maxAge: 120000}
}))


// Mongoose
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/eCommerceSchema');

var UserSchema = new mongoose.Schema ({
  first_name: { type: String, trim: true, required: true},
  last_name: { type: String, trim: true, required: true},
  email: { type: String, trim: true, required: true},
  password: { type: String, trim: true, required: true},
  created_at: { type: Date, default: Date().toString().substring(0, 15)},
  updated_at: { type: Date, default: Date().toString().substring(0, 15)}

});

mongoose.model('User', UserSchema);
var User = mongoose.model('User');

//MySQL

// Routes

app.get('/foo', function(req, res, next){
  res.send('<p>Expires in ' + (req.session.cookie.maxAge / 1000) + '  seconds</p>');
})

app.get('/destroy', function(req, res, next){
  req.session.destroy(function(err){
    res.send('reset session');
  })
})

app.get('/authenticate', function(req, res){
  if(req.session.user_id){
    res.json(true);
  } else {
    res.json(false); };
})

app.get('/checkSession', function(req, res, next){
  console.log(req.session);
  if(req.session.user_id){
    res.send('alive');
  } else {
    res.send('dead');
  }
})

app.post('/users', function(req, res){
  var userInstance = new User({
    email: req.body.email,
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    password: req.body.password,
  });
  console.log(req.session);
  userInstance.save(function(err){
    if(err){
      console.log(err);
      return res.json(err);
    } else {
    //passing back the object we are passing in
    // return res.json(userInstance)}
    return res.json(true)};
  })
})

app.post('/sessions', function(req, res){
  console.log(req.body);
  User.findOne({
    email: req.body.email,
    password: req.body.password},
    //returns and error if there is one and then user, without err, user if undefined
    function(err, user){
      if(user){
        console.log(user);
        //Sessions user ID
        //req.session is the express session variable.
        req.session.user_id = user.id
        console.log(req.session.user_id);
        user.password = null;
        user.created_at = null;
        user.updated_at = null;
        return res.json(user);
      } else {
        return res.json(false);
      }
  })
})

app.listen(8000);