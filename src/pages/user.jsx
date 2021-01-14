import React, { PureComponent } from 'react';


class User extends PureComponent {
    render() {
        console.log(this.props.location)
        return (
            <div>
                user
            </div>
        );
    }
}



export default User;
