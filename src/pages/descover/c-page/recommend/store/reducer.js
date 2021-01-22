import * as actionTypes from './constants';
import { Map, fromJS } from 'immutable';
const defaultState = Map({
    topBanners: [],
    albums: [],
    currentSong: {}
})

function reducer(state = defaultState, action){
    switch(action.type) {
        case actionTypes.CHANGE_TOPBANNERS:
            return state.set('topBanners', action.topBanners);
        case actionTypes.CHANGE_ALBUMS:
            return state.set('albums', action.albums);
        default:
            return state;
    }
}

export default reducer;
