var mkdirp = require('mkdirp');
var waterfall = require('async-waterfall');
waterfall(
  [
    function(){
      mkdirp('/data/db', function (err) {
          if (err) console.error(err)
          else console.log('pow!')
      });
    },
    function(){
      console.log('Create a mongo');
      var mongoSpawn = require('child_process').spawn;
      var mongodb = mongoSpawn('mongod', []);
    }
  ]
  , function() {
  console.log('mongodb and app initialized');
});
