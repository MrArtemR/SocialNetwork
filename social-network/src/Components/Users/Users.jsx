import React from 'react';
import User from './User/User';

const Users = ({users}) =>{
    let userComponents = users.map(value => <User name={value.name} id={value.id}
            photos={value.photos} status={value.status} followed={value.followed}/>);
    return (
        <div>
            {userComponents}
        </div>
    );
}

export default Users;