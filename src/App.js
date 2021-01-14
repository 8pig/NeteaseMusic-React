import React, { memo } from 'react'
import {renderRoutes} from 'react-router-config'

import routes from './router'
import { HashRouter } from 'react-router-dom'

import AppHeader from '@@/src/components/app-header'
import AppFooter from '@@/src/components/app-footer'


export default memo(function App() {
    return (
        <HashRouter>
            <AppHeader></AppHeader>
            {renderRoutes(routes)}
            <AppFooter></AppFooter>
        </HashRouter>
    )
})
