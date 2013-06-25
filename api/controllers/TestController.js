/*---------------------
	:: Test
	-> controller
---------------------*/
var TestController = {

  home: function(req, res) {
    res.json({ hello: 'world' });
  }

};
module.exports = TestController;
