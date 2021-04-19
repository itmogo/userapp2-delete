import React from 'react';
import UsersItems from './UsersItems';

// component display all users in our state from App js
function UsersList (props){

    return (
        
        <div>
            {/* we loop through all the users and for every user,
         we display a UserItem component. We also pass the user as a prop
         to UserItem so that we can display it */}
            <h4>Users List</h4>
            {/*loop all users*/}
            {props.allUsers.map((user) => (           
               <UsersItems user={user} />
            ))}
        </div>
         
    );
}

export default UsersList;