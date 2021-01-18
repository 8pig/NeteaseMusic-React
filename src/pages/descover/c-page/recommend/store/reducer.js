import * as actionTypes from './constants';
import { Map, fromJS } from 'immutable';
const defaultState = Map({
    topBanners: []
})

function reducer(state = defaultState, action){
    switch(action.type) {
        case actionTypes.CHANGE_TOPBANNERS:
            return state.set('topBanners', action.topBanners);
        default:
            return state;
    }
}

export default reducer;