var models = require('../models');

module.exports = {
  get: function (req, res) {
    models.users.getAll( (err, users) => {
      if (err) {
        res.sendStatus(400);
      } else {
        res.status(200).json(users);
      }
    });
  },
  post: function (req, res) {
    var params = [req.body.username];
    models.users.create((params, (err, newName) => {
      if (err) {
        res.sendStatus(400);
      } else {
        res.status(201).json(newName);
      }
    }));
  }
};
