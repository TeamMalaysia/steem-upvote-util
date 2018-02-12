import { aboutPost } from '../index';

function aboutTest() {
  // cheetah +1
  aboutPost(
    'superoo7',
    'recordpool-weekly-analysis-report-2-weekly-contest-5'
  ).then(data => console.log(data));
  // no cheetah
  aboutPost(
    'howtostartablog', //superoo7
    'daily-food-photography-12-feb-announcement'
  ).then(data => console.log(data));
  // short post
  aboutPost(
    'maverickfoo',
    'so-wheres-the-wrench--2018-02-12-06-12-36'
  ).then(data => console.log(data));
}

export { aboutTest };
