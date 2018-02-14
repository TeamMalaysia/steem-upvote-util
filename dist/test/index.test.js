'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.aboutTest = undefined;

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _index = require('../index');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function aboutTest() {
  console.log('==========ABOUT TEST START==========');
  // cheetah +1
  testFunction('superoo7', 'recordpool-weekly-analysis-report-2-weekly-contest-5');
  // short post
  testFunction('maverickfoo', 'so-wheres-the-wrench--2018-02-12-06-12-36');
  testFunction('superoo7', 'why-sometimes-posting-on-steemit-com-is-a-good-idea-instead-of-on-other-platform');

  console.log('========== ABOUT TEST END ==========');
}

function testFunction(author, permlink) {
  (0, _index.aboutPost)(author, permlink).then(function (data) {
    var author = data.author,
        created = data.created,
        isCheetah = data.isCheetah,
        articleLength = data.articleLength;

    if (isCheetah) {
      console.log('Voted by cheetah');
    } else if ((0, _index.checkPostAge)(created, 302400000)) {
      // 3.5 days
      console.log('Post too old');
    } else {
      var createdTime = (0, _index.beautifyDate)(created);
      var weightage = (0, _index.weightageForPost)(articleLength, 250, 4000);
      console.log('The post is ' + createdTime + ' and will be upvoted by ' + weightage / 100 + '%');
    }
  });
}

exports.aboutTest = aboutTest;
//# sourceMappingURL=index.test.js.map