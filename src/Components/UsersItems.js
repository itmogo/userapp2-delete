import React from 'react';
// Represent a single user that will be displayed in
// the userlist component

function UsersItems(props){
    // accepts users properties and displays them withnin the 
    // userslist component
    return(        
        
            <div className="row background">
                <div className="col-md-3">{props.user.username}</div>
                <div className="col-md-3">{props.user.email}</div>
                <div className="col-md-3">{props.user.country}</div>        
                <button className="col-md-1.5">Update</button>
                <button className="col-md-1.5">Delete</button>
                </div>       
        );
    }

export default UsersItems;