import React from 'react';
import User from './User/User';

const Users = (props) =>{
    let users = props.users.map(value => <User name={value.name} id={value.id}
            photos={value.photos} status={value.status} followed={value.followed}/>);
    return (
        <div>
            {users}
        </div>
    );
}

export default Users;