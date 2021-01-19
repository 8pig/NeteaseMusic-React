import React, { memo } from 'react';
import TabBanner from './c-cpns/tab-banner';
import RecommendModule from './c-cpns/recommend-module';

function Recommend(props) {

    return (
        <div>
            <TabBanner />
            <RecommendModule />
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
