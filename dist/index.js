'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.aboutPost = undefined;

var _dotenv = require('dotenv');

var _dotenv2 = _interopRequireDefault(_dotenv);

var _steem = require('steem');

var _steem2 = _interopRequireDefault(_steem);

require('babel-polyfill');

var _regex = require('./regex');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_dotenv2.default.config();

// ABOUT THE POST

function aboutPost(author, permlink, weightage) {
  return new Promise(function (resolve, reject) {
    _steem2.default.api.getContent(author, permlink, function (err, result) {
      if (err) {
        console.log('ERROR');
        reject('ERROR');
      }

      var isCheetah = !(result.active_votes.filter(function (data) {
        if (data.voter === 'cheetah') {
          return true;
        }
        return false;
      }).length === 0);

      var bodyParse1 = (0, _regex.imageParser)(result.body);
      var bodyParse2 = (0, _regex.linkParser)(bodyParse1);
      var articleLength = bodyParse2.length;

      resolve({
        author: result.author,
        created: result.created,
        isCheetah: isCheetah,
        articleLength: articleLength
      });
    });
  });
}

// UPVOTE

function upvote(author, permlink, weightage) {
  return _steem2.default.broadcast.vote(process.env.STEEM_POSTING, process.env.STEEM_USERNAME, 'superoo7', 'preperation-for-upcoming-meetup', 10000, function (err, result) {
    console.log(err, result);
  });
}

exports.aboutPost = aboutPost;
//# sourceMappingURL=index.js.map