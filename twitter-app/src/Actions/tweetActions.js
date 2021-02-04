import {
  CLINTON_TWEETS_REQUEST,
  CLINTON_TWEETS_SUCCESS,
  CLINTON_TWEETS_FAIL,
  TRUMP_TWEETS_REQUEST,
  TRUMP_TWEETS_SUCCESS,
  TRUMP_TWEETS_FAIL,
} from "../Constants/tweetConstants";
import datajson from "../data/tweets.json";
import Axios from "axios";

export async function clintonAction(dispatch) {
  console.log("clinton Action");
  dispatch({ type: CLINTON_TWEETS_REQUEST });
  try {
    const { data } = await Axios.get("/clinton");
    dispatch({ type: CLINTON_TWEETS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: CLINTON_TWEETS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
}
export async function trumpAction(dispatch) {
  dispatch({ type: TRUMP_TWEETS_REQUEST });
  try {
    const { data } = await Axios.get("/trump");
    dispatch({ type: TRUMP_TWEETS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: TRUMP_TWEETS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
}
