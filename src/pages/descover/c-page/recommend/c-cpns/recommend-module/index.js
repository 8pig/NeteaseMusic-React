import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from "react-redux";


import {

} from './style';
import { getAlbumActon } from "../../store/actionCreators";

function RecommendModule(props) {
    const dispatch = useDispatch();
    const { albums } = useSelector(state => ({
        albums: state.getIn(['recommend', 'topBanners'])
    }), shallowEqual)

    useEffect(() => {
        dispatch(getAlbumActon())
    }, [getAlbumActon]);
    return (
        <div className="wrap-v2">
            {
                albums.map((item, index) => {
                    return (
                        <div key={index}>
                            {JSON.stringify(item)}
                        </div>
                    )
                })
            }
        </div>
    )
}
export default memo(RecommendModule)
