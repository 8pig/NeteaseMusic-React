import React from 'react';
import Descover from "@@/src/pages/descover";
import Friend from "@/pages/friend";
import Mine from "@/pages/mine";
import {
    Redirect
} from 'react-router-dom';

const routes = [{
        path: '/',
        exact: true,
        render: () => ( <Redirect to = "/discover" / >)
    },
    {
        path: "/discover",
        component: React.lazy(() => import("@@/src/pages/descover")),
        routes: [{
                path: "/discover",
                exact: true,
                render: () => ( <
                    Redirect to = "/discover/recommend" / >
                )
            },
            {
                path: "/discover/recommend",
                component: React.lazy(() => import("@/pages/descover/c-page/recommend"))
            },
        ]
    },
    {
        path: '/friend',
        component: Friend
    },
    {
        path: '/mine',
        component: Mine
    }

]
export default routes;
