import React, { memo, useEffect } from 'react';

import request from '@/services/request';

export default memo(function Descover() {
    useEffect(() => {
        request({
            url: '/banner'
        }).then(res => {
            console.log(res);
        })
    }, [])
    return (
        <div>
            Descover
        </div>
    )
})
