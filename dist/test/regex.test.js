'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regex = require('../regex');

var sourceFile = '\n# Hello world\ntest [link](https://google.com)\n![img](https://google.com)\n<br>\n<br/>\n<hr>\n<hr/>\n<div class="pull-left">\nasd asd asd asd\n</div>\n';

var imgFile = '\n# Hello world\ntest [link](https://google.com)\n\n<br>\n<br/>\n<hr>\n<hr/>\n<div class="pull-left">\nasd asd asd asd\n</div>\n';

var linkFile = '\n# Hello world\ntest link\n\n<br>\n<br/>\n<hr>\n<hr/>\n<div class="pull-left">\nasd asd asd asd\n</div>\n';

function regexTest() {
  console.log('==========REGEX TEST START==========');
  // Image test
  var resultFile = (0, _regex.imageParser)(sourceFile);
  console.log('imagePaser test:');
  console.log(resultFile === imgFile);
  // Link test
  console.log('linkPaser test:');
  console.log((0, _regex.linkParser)(resultFile) === linkFile);
  console.log('========== REGEX TEST END ==========');
}

exports.default = regexTest;
//# sourceMappingURL=regex.test.js.map