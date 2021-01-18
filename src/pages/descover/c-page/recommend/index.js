import React, { memo, useEffect } from 'react';
import { getTopBannerAction } from './store/actionCreators';

import { useDispatch, useSelector, shallowEqual } from 'react-redux';

function Recommend(props) {

    const { topBanners } = useSelector(state => ({
      topBanners: state.getIn(['recommend', 'topBanners'])
    }), shallowEqual)

    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(getTopBannerAction());
    }, [dispatch])

    return (
        <div>
            recommend { topBanners.length }
            <p>d</p>
            <p>d</p>
            <p>d</p>
            <p>d</p>
            <p>d</p>
            <p>d</p>
            <p>d</p>
            <p>d</p>
            <p>d</p>
        </div>
    )
}

export default memo(Recommend)




// function Recommend(props) {
//     const { getBanners, topBanners } = props;
//     useEffect(() => {
//         getBanners();
//     }, [getBanners])
//     return (
//         <div>
//             recommend {topBanners.length}
//         </div>
//     )
// }
// // export default memo(Recommend)

// const mapStateToProps = state => {
//   return {
//     topBanners: state.recommend.topBanners
// }
// }

// const mapDispatchToProps = dispatch => ({
//     getBanners: () => {
//         dispatch(getTopBannerAction())
//     }
// })
// export default connect(mapStateToProps, mapDispatchToProps)(memo(Recommend))
