import {
  imageParser,
  linkParser,
  divParser,
  breakLineParser
} from '../regex';

const sourceFile = `
# Hello world
test [link](https://google.com)
![img](https://google.com)
<br>
<br/>
<hr>
<hr/>
<div class="pull-left">
asd asd asd asd
</div>
`;

const imgFile = `
# Hello world
test [link](https://google.com)

<br>
<br/>
<hr>
<hr/>
<div class="pull-left">
asd asd asd asd
</div>
`;

const linkFile = `
# Hello world
test link

<br>
<br/>
<hr>
<hr/>
<div class="pull-left">
asd asd asd asd
</div>
`;

// Image test
function regexTest() {
  let resultFile = imageParser(sourceFile);
  console.log('imagePaser test:');
  console.log(resultFile === imgFile);

  // Link test
  console.log('linkPaser test:');
  console.log(linkParser(resultFile) === linkFile);
}

export default regexTest;
