import React from 'react';
// Represent a single user that will be displayed in
// the userlist component

function UsersItems(props){
    // accepts users properties and displays them within the 
    // userslist component
    return(        
        
            <div className="row background">
                <div className="col-md-2"><span>Username:</span><br />
                <div className="col-md-2 padd">{props.user.username}</div>
                   </div>  
                <div className="col-md-3 title"><span>Email:</span><br />
                <div className="col-md-3 padd">{props.user.email}</div>
                </div> 
                <div className="col-md-2 title"><span>Country:</span> <br />
                <div className="col-md-2 padd">{props.user.country}</div>
                </div>
                
                <div className="col-md-2 title"><span>Telephone:</span> <br /> 
               <div className="col-md-2 padd">{props.user.telephone}</div> 
                </div>
                  
                <div className="col-md-3">  
                <p className="col-md-3 title"><span>Action:</span> 
                <div className="down">           
                <button className="btn-success btn-xs">Update</button>              
                <button  className="btn-danger btn-xs">Delete</button></div>
                </p> </div>                              
            </div>     
        );
    }

export default UsersItems;