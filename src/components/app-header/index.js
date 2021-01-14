import React, { memo } from 'react'



import { NavLink } from 'react-router-dom'
import {
    HeaderWrapper
} from './style';
export default memo(function AppHeader() {
    return (
        <HeaderWrapper>
            <div className="content wrap-v1">
                <h1 className="wrap-left">
                    <a className="logo" href="/#/"></a>
                    <div className="wrap-nav">
                    <NavLink to="/">发现音乐</NavLink>
                    <NavLink to="/mine">我的音乐</NavLink>
                    <NavLink to="/friend">我的好友</NavLink>
                </div>

                </h1>

            </div>
            <div className="divider">
            </div>
        </HeaderWrapper>
    )
})
