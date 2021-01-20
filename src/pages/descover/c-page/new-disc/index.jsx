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
