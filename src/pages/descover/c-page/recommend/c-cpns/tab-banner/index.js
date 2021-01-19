import React, { memo, useCallback, useEffect, useState } from 'react';

import { getTopBannerAction } from '../../store/actionCreators';

import { useDispatch, useSelector, shallowEqual } from 'react-redux';


import { Carousel } from 'antd';

import {
    GS
} from './style';

function TabBox(props) {
    const { topBanners } = useSelector(state => ({
        topBanners: state.getIn(['recommend', 'topBanners'])
    }), shallowEqual)

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getTopBannerAction());
    }, [dispatch]);
    const [img, setImg] = useState(0)

    const beforeChange = useCallback((from, to) => {
        console.log(from, to);
        if(topBanners[to] && topBanners[to].imageUrl){
            setImg(to)
        }
    },[topBanners])
    const bgImg = topBanners[img] && topBanners[img].imageUrl + "?imageView&blur=40x20";

    return (
        <GS bgImg={bgImg}>
            <div className="wrap-v1">
                <div className="wrap-v2">
                <Carousel effect="fade" autoplay  beforeChange={beforeChange}>
                        {
                            topBanners.map(item => {
                                return (
                                    <div key={item.imageUrl}>
                                        <img src={item.imageUrl} alt={item.typeTitle} />
                                    </div>
                                )
                            })
                        }
                    </Carousel>
                </div>
            </div>
        </GS>
    )
}
export default memo(TabBox)
