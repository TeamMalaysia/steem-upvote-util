import dotenv from 'dotenv';
import steem from 'steem';
import 'babel-polyfill';



dotenv.config();

// const bot = new SteemBot({
//   username: process.env.STEEM_USERNAME,
//   postingKey: process.env.STEEM_POSTING
// });




// UPVOTE

// steem.broadcast.vote(process.env.STEEM_POSTING, process.env.STEEM_USERNAME, "superoo7", "preperation-for-upcoming-meetup", 10000, function(err, result) {
//   console.log(err, result);
// });

steem.api.getContent("steemitservice", "google-faces-lawsuit-in-us-for-allegedly-selling-defected-pixel-smartphones", function(err, result) {
  if (err) {
    console.log("ERROR");
    return;
  }

  console.log(`@${result.author}`);
  console.log(result.created);
  console.log(result.body.length);
  result.active_votes.map(data => {
    if (data.voter === 'cheetah') {
      console.log("HEHE")
    }
  })
});
