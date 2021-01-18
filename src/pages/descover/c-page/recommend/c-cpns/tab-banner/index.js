import React, { memo, useEffect } from 'react';

import { getTopBannerAction } from '../../store/actionCreators';

import { useDispatch, useSelector, shallowEqual } from 'react-redux';


import { Carousel } from 'antd';


function TabBox(props) {
    const { topBanners } = useSelector(state => ({
        topBanners: state.getIn(['recommend', 'topBanners'])
    }), shallowEqual)

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getTopBannerAction());
    }, [dispatch])
    return (
        <div>
            <div className="wrap-v1">
                <div className="wrap-v2">
                <Carousel effect="fade" autoplay effect="fade">
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
        </div>
    )
}
export default memo(TabBox)
