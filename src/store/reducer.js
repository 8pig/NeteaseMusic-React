import { combineReducers } from 'redux-immutable';

import { reducer as recommendReducer } from '../pages/descover/c-page/recommend/store';

const cReducer = combineReducers({
  recommend: recommendReducer,
//   player: playerReducer
});

export default cReducer;
