import React, {useContext} from 'react'
import { tokenContext,userContext } from './con';


export default function ConText() {

    const user = useContext(userContext);
    const token = useContext(tokenContext)
    console.log(user)
    return (
        <div>
            
        </div>
    )
}
