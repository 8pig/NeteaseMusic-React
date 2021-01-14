import React, { useEffect } from 'react'
import {userContext, tokenContext} from './pages/con'
import ConText from './pages/ConText'
export default function App() {

    useEffect(() => {

    })
    return (
        <div>
        hello
            <userContext.Provider value={{user: '野猪'}}>
                <tokenContext.Provider value={{token: '佩奇'}}>
                    <ConText />
                </tokenContext.Provider>
            </userContext.Provider>
        </div>
    )
}
