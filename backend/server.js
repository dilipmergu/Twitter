import express from "express";
import Twitter from "twit";
import dotenv from "dotenv";

const app = express();
dotenv.config();

const apikey = process.env.apikey;
const apiSecretKey = process.env.apiSecretKey;
const accessToken = process.env.accessToken;
const accessTokenSecret = process.env.accessTokenSecret;

var Twi = new Twitter({
  consumer_key: apikey,
  consumer_secret: apiSecretKey,
  access_token: accessToken,
  access_token_secret: accessTokenSecret,
});

app.get("/trump", function (req, res) {
  Twi.get(
    "search/tweets",
    { q: "@realDonaldTrump", count: 20 },
    function (err, data, response) {
      let trumpTweets = [];
      if (data) {
        const { statuses } = data;
        for (var tweet in statuses) {
          console.log(tweet);
          let tempTweet = {
            text: statuses[tweet].text,
            name: statuses[tweet].user.name,
            retweet_count: statuses[tweet].retweet_count,
            favorite_count:
              (statuses[tweet].retweeted_status &&
                statuses[tweet].retweeted_status.favorite_count) ||
              0,
          };
          trumpTweets.push(tempTweet);
        }
      }
      res.send(trumpTweets);
      if (err) {
        res.status(400).send("tweets error");
      }
    }
  );
});
app.get("/clinton", function (req, res) {
  Twi.get(
    "search/tweets",
    { q: "@HillaryClinton", count: 20 },
    function (err, data, response) {
      let clintonTweets = [];
      if (data) {
        const { statuses } = data;
        for (var tweet in statuses) {
          console.log(tweet);
          let tempTweet = {
            text: statuses[tweet].text,
            name: statuses[tweet].user.name,
            retweet_count: statuses[tweet].retweet_count,
            favorite_count:
              (statuses[tweet].retweeted_status &&
                statuses[tweet].retweeted_status.favorite_count) ||
              0,
          };
          clintonTweets.push(tempTweet);
        }
      }
      res.send(clintonTweets);
      if (err) {
        res.status(400).send("tweets error");
      }
    }
  );
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`);
});
