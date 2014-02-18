var express = require('express')
  , app     = express()
  , port    = process.env.PORT || 5000;

app.configure(function() {
  app.use('/', express.static(__dirname + '/mockups'));
});

app.listen(port);