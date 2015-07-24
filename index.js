var express = require('express');
var app = express();

function roll() {
  var num = Math.floor(Math.random() * 3 - 1);
  var die;

  if ( num === - 1 ){
    die = ":minus:";
  }else if ( num === 1 ){
    die = ":plus:";
  }else {
    die = ":blank:";
  }

  return {die: die, num: num};
}


app.get('/fudge_dice', function(req, res) {
  var dice = "", result, sum = 0;
  for ( var i = 0; i < 4; i++ ){
    result = roll();
    dice += result.die;
    sum += result.num;
  }

  dice += " (" + sum + ")";
  res.send(dice);
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
