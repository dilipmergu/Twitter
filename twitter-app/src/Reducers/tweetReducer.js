import {
  CLINTON_TWEETS_FAIL,
  CLINTON_TWEETS_REQUEST,
  CLINTON_TWEETS_SUCCESS,
  TRUMP_TWEETS_FAIL,
  TRUMP_TWEETS_REQUEST,
  TRUMP_TWEETS_SUCCESS,
} from "../Constants/tweetConstants";

export const clintonReducer = (state = {}, action) => {
  switch (action.type) {
    case CLINTON_TWEETS_REQUEST:
      return state;
    case CLINTON_TWEETS_SUCCESS:
      return { clintonTweets: action.payload };
    case CLINTON_TWEETS_FAIL:
      return { error: action.payload };
    default:
      return state;
  }
};

export const trumpReducer = (state = {}, action) => {
  switch (action.type) {
    case TRUMP_TWEETS_REQUEST:
      return state;
    case TRUMP_TWEETS_SUCCESS:
      return { trumpTweets: action.payload };
    case TRUMP_TWEETS_FAIL:
      return { error: action.payload };
    default:
      return state;
  }
};
