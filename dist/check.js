'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.beautifyDate = exports.weightageForPost = exports.checkPostAge = undefined;

var _config = require('./config.json');

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function checkPostAge(isoDate) {
  var unixDate = new Date(isoDate.replace(/-/g, '/').replace('T', ' ').replace('Z', ''));
  return Date.now() - unixDate > _config.maximumPostAge;
}

function weightageForPost(postLength) {
  if (postLength < _config.minimumLength) {
    // 10% VP
    return 10 * 100;
  } else if (postLength < _config.optimumLength) {
    // 10% ~ 80% VP
    return parseInt((postLength - _config.minimumLength) / (_config.optimumLength - _config.minimumLength) * 80 * 100);
  } else {
    // 80% VP
    return 80 * 100;
  }
}

function beautifyDate(isoDate) {
  var unixDate = new Date(isoDate.replace(/-/g, '/').replace('T', ' ').replace('Z', ''));
  return (0, _moment2.default)(unixDate).fromNow();
}

exports.checkPostAge = checkPostAge;
exports.weightageForPost = weightageForPost;
exports.beautifyDate = beautifyDate;
//# sourceMappingURL=check.js.map