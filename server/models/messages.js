var db = require('../db');

module.exports = {
  getAll: function (callback) {
    var queryString = 'SELECT messages.id, messages.message_text, messages.roomname, usernames.name_text FROM messages LEFT OUTER JOIN usernames ON (messages.nameId = usernames.id)';
    db.query(
      queryString,
      function(err, results) {
        if (err) {
          console.log('err: ', err);
          callback(err);
        } else {
          console.log('result: ', results);
          callback(null, results);
        }
      }
    );
  }, // a function which produces all the messages
  create: function (params, callback) {
    //Query string to use the '?' sql operator?
    var queryString = 'INSERT INTO messages (message_text, roomname, nameId) VALUES(?, ?, (SELECT id FROM usernames WHERE name_text = ? LIMIT 1))';
    db.query(queryString, params, function(err, results) {
      if (err) {
        callback(err);
      } else {
        callback(null, results);
      }
    });
  } // a function which can be used to insert a message into the database
};
