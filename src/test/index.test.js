import moment from 'moment';
import {
  aboutPost,
  checkPostAge,
  weightageForPost,
  beautifyDate
} from '../index';

function aboutTest() {
  console.log('==========ABOUT TEST START==========');
  // cheetah +1
  testFunction(
    'superoo7',
    'recordpool-weekly-analysis-report-2-weekly-contest-5'
  );
  // short post
  testFunction(
    'maverickfoo',
    'so-wheres-the-wrench--2018-02-12-06-12-36'
  );
  testFunction(
    'superoo7',
    'why-sometimes-posting-on-steemit-com-is-a-good-idea-instead-of-on-other-platform'
  );

  console.log('========== ABOUT TEST END ==========');
}

function testFunction(author, permlink) {
  aboutPost(author, permlink).then(data => {
    const {
      author,
      created,
      isCheetah,
      articleLength
    } = data;
    if (isCheetah) {
      console.log('Voted by cheetah');
    } else if (checkPostAge(created, 302400000)) {
      // 3.5 days
      console.log('Post too old');
    } else {
      let createdTime = beautifyDate(created);
      let weightage = weightageForPost(
        articleLength,
        250,
        4000
      );
      console.log(
        `The post is ${createdTime} and will be upvoted by ${weightage /
          100}%`
      );
    }
  });
}

export { aboutTest };
