import React, { memo, useEffect } from 'react';
import { getTopBannerAction } from './store/actionCreators';

import { connect } from 'react-redux';



function Recommend(props) {
    const { getBanners, topBanners } = props;
    useEffect(() => {
        getBanners();
    }, [getBanners])
    return (
        <div>
            recommend {topBanners.length}
        </div>
    )
}
// export default memo(Recommend)

const mapStateToProps = state => ({
    topBanners: state.recommend.topBanners
})

const mapDispatchToProps = dispatch => ({
    getBanners: () => {
        dispatch(getTopBannerAction())
    }
})
export default connect(mapStateToProps, mapDispatchToProps)(Recommend)
