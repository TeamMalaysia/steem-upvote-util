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
  'superoo7',
  'gopro-hero-6-2018-02-13-09-33-41',
  config
).then(data => console.log(data));

