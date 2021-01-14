import styled from 'styled-components'

export const HeaderWrapper = styled.div`
    color: #fff;
    height:75px;
    color: #333;
    background-color: #242424;
    .content {
        height:70px;
        display: flex;
        justify-content: space-between;
        .wrap-left{
            .logo {
                display: block;
                width: 176px;
                height: 69px;
                background: url("https://music.163.com/style/web2/img/frame/topbar.png?5a8eb611da974928eb4424d1dce6b183") no-repeat;
                background-position: 0 0;
            }

        }
    }
    .wrap-v1 {
        width: 1100px;
        margin: 0 auto;
    }
    .divider {
        height: 5px;
        background-color: red;
    }
`;