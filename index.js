var express = require('express');
var app = express();

var router = express.Router();

router.all("/*",express.static('public'));

app.use("/",router);

app.listen(3000, function(){
  console.log("server running...");
});