const { Post } = require('../models');

const postdata =
[
  {
    "postTitle": "This is first title ",
    "postContent": "This title is for tech blog assignment",
    "userId": 1
  },
  {
    "postTitle": "This is the last two months in bootcamp",
    "postContent": "Everyone got to be professional soon",
    "userId": 2
  },
  {
    "postTitle": "What you want to be?",
    "postContent": "Be a full stack developer!",
    "userId": 3
  }
];

const seedPost = () => Post.bulkCreate(postdata);

module.exports = seedPost;