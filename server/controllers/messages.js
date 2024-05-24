var models = require('../models');

module.exports = {
  get: function (req, res) {
    models.messages.getAll((err, msgs) => {
      if (err) {
        res.sendStatus(400);
      } else {
        res.status(200).json(msgs);
      }
    }); // a function which handles a get request for all messages
  },
  post: function (req, res) {
    var params = [req.body.message, req.body.roomname, req.body.username];
    console.log('req body: ', req.body);
    models.messages.create((params, (err, newMsg) => {
      if (err) {
        res.sendStatus(400);
      } else {
        res.status(201).json(newMsg);
      }
    }));
  } // a function which handles posting a message to the database
};
