const { User } = require('../models');

const userdata =
[
  {
    "username": "Cheng",
    "password": "password"
  },
  {
    "username": "Stone",
    "password": "password"
  },
  {
    "username": "Mike",
    "password": "password"
  },
  {
    "username": "Namees",
    "password": "password"
  }
];

const seedUser = () => User.bulkCreate(userdata, {
  individualHooks: true,
  returning: true,
});

module.exports = seedUser;

