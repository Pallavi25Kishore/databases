var db = require('../db');

module.exports = {
  getAll: function (callback) {
    var queryString = 'SELECT * FROM usernames';
    db.query(queryString,
      function(err, results) {
        if (err) {
          callback(err);
        } else {
          callback(null, results);
        }
      });
  },
  create: function (params, callback) {
    var queryString = 'INSERT INTO usernames (user_text) VALUES (?)';
    db.query(queryString, params,
      function(err, results) {
        if (err) {
          callback(err);
        } else {
          callback(null, results);
        }
      });
  }
};
