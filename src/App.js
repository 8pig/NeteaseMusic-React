import "@/assets/css/reset.css";
import React, { memo } from 'react'
import {renderRoutes} from 'react-router-config'
import { Provider } from 'react-redux';


import routes from './router'
import store from './store';

import AppHeader from '@@/src/components/app-header'
import AppFooter from '@@/src/components/app-footer'
import { HashRouter } from 'react-router-dom'
export default memo(function App() {
    return (
        <Provider store={store}>
            <HashRouter>
                <AppHeader></AppHeader>
                { renderRoutes(routes) }
                <AppFooter></AppFooter>
            </HashRouter>
        </Provider>

    )
})
