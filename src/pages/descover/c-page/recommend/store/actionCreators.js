import * as actionTypes from './constants'
import { getTopBanners, getTopAlbum } from '@/services/recommend'


const changeTopBannerAction = res => {
    return {
        type: actionTypes.CHANGE_TOPBANNERS,
        topBanners: res.banners
    }
}

export const getTopBannerAction = () => {
    return dispatch => {
        getTopBanners().then(res => {
            dispatch(changeTopBannerAction(res))
        })
    }
}

const changeAlbimActopm = (res) => {
    return {
        type: actionTypes.CHANGE_ALBUMS,
        albums: res.albums
    }
}

export const getAlbumActon = () => {
    return dispatch => {
        getTopAlbum().then(res => {
            dispatch(changeAlbimActopm(res))
        })
    }
}
