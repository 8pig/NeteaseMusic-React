import React, { memo, useEffect } from 'react';
import { getTopBannerAction } from './store/actionCreators';

import { connect } from 'react-redux';



function Recommend(props) {
    // const { getBanners } = props;
    // useEffect(() => {
    //     getBanners();
    // }, [getBanners])
    return (
        <div>
            recommend
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
export default connect(mapStateToProps, mapDispatchToProps)(memo(Recommend))
