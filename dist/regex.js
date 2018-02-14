'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
// MARKDOWN REGEX

// MAIN
// BODY->IMAGE->

// IMAGE: ![]()

function imageParser(textBody) {
  var re = /!\[([^\]]*)]\(([^\)]*)\)/g;
  var returnVal = textBody.replace(re, '');
  return returnVal;
}

// LINK: []()
function linkParser(textBody) {
  var re = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9]\.[^\s]{2,})/g;
  var returnVal = textBody.replace(re, '');
  return returnVal;
}

// DIV: <div class="pull-left"></div> <center></center>
function divParser(textBody) {
  return;
}

// <br><hr>
function breakLineParser(textBody) {
  return;
}

exports.imageParser = imageParser;
exports.linkParser = linkParser;
exports.divParser = divParser;
exports.breakLineParser = breakLineParser;
//# sourceMappingURL=regex.js.map