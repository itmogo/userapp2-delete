import React from 'react';
import UsersItems from './UsersItems';

// component display all users in our state from App js
class UsersList  extends React.Component{
    
    render(){

    return (
        
        <div >
            
            <h4>Users List</h4>
            {/*loop all users*/}
            {this.props.allUsers.map((user) => (  // added at= key id         
               <UsersItems 
               user={user}  
               key={user.id} 
               deleteUser={this.props.deleteUser}  
                />
            ))}
        </div>
         
    );
}
}

export default UsersList;

/* we loop through all the users and for every user,
         we display a UserItem component. We also pass the user as a prop
         to UserItem so that we can display it */