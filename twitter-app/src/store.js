import { createStore, compose, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { clintonReducer, trumpReducer } from "./Reducers/tweetReducer";

const initialState = {
  tweetsClinton: {
    clintonTweets: [],
  },
  tweetsTrump: {
    trumpTweets: [],
  },
};
const reducer = combineReducers({
  tweetsTrump: trumpReducer,
  tweetsClinton: clintonReducer,
});
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;
