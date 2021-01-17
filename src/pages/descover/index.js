import React, { memo, useEffect } from 'react';
import { getTopBannerAction } from './c-page/recommend/store/actionCreators';

import { connect } from 'react-redux';
import Recommend from './c-page/recommend'



function Descover(props) {

    return (
        <div>
            Descover
            <Recommend />
        </div>
    )
}
export default memo(Descover)

