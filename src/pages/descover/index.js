import React, { memo } from 'react';
import { renderRoutes } from 'react-router-config';
import { NavLink } from 'react-router-dom';
import { dicoverMenu } from '@/common/local-data';

import { TopMenu, WrapDiv } from './style';

function Descover(props) {
    const { route } = props;
    return (
        <div>
            <WrapDiv>
                <TopMenu className="wrap-v1">
                    {
                        dicoverMenu.map(item => {
                            return (
                                <div className="item" key={item.title}>
                                    <NavLink to={item.link}> {item.title} </NavLink>
                                </div>
                            )
                        })
                    }
                </TopMenu>
            </WrapDiv>
            { renderRoutes(route.routes) }
        </div>
    )
}
export default memo(Descover)

