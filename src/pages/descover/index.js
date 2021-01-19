import React, { memo } from 'react';
import { renderRoutes } from 'react-router-config';
import { NavLink } from 'react-router-dom';
import { dicoverMenu } from '@/common/local-data';

import {} from './style';
import Banner from './banner';

function Descover(props) {
    const { route } = props;
    return (
        <div>
           <Banner />
            { renderRoutes(route.routes) }
        </div>
    )
}
export default memo(Descover)

