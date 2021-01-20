import request from './request';


export const getTopBanners = () => {
    return request({
        url: '/banner'
    })
}

export const getTopAlbum = () => {
    return request({
        url: '/top/album?limt=8'
    })
}
