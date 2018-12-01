
var express = require('express');
var router = express.Router();
var app = express();
const request = require('request-promise');

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log("MASUK GET POST GA")
  console.log(req.app.locals.token)

  // you need permission for most of these fields
  const userFieldSet = 'website, picture, photos, feed';

  const options = {
    method: 'GET',
    uri: `https://graph.facebook.com/v2.8/10156241863113547/posts`,
    qs: {
      access_token: req.app.locals.token,
    }
  };
  request(options)
    .then(fbRes => {
      console.log(fbRes)
      res.json(fbRes);
    })
});

module.exports = router;

