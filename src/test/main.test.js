import { aboutTest } from './index.test';
import regexTest from './regex.test';
import { main, upvote } from '../index';

// REGEX TEST
regexTest();

// ABOUT POST TEST
aboutTest();

// main
const config = {
  maximumPostAge: 302400000,
  minimumLength: 250,
  optimumLength: 4000
};

main(
  'chuazm',
  'love-is-in-the-air-in-mindvalley-benefits-for-company-culture',
  config
).then(data => console.log(data));

