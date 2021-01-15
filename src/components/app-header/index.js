import React, { memo } from 'react'



import { NavLink } from 'react-router-dom'
import {
    HeaderWrapper
} from './style';
import {
    headerLinks
} from '@/common/local-data';
export default memo(function AppHeader() {
    return (
        <HeaderWrapper>
            <div className="content wrap-v1">
                <h1 className="wrap-left">
                    <a className="logo" href="/#/"> </a>
                    <div className="wrap-nav">
                        {
                            headerLinks.map((item) => {
                                return ( <NavLink exact to={item.link} key={item.title}>{item.title}</NavLink>)
                            })
                        }
                    </div>

                </h1>

            </div>
            <div className="divider">
            </div>
        </HeaderWrapper>
    )
})
