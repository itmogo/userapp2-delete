import React from 'react';
// Represent a single user that will be displayed in
// the userlist component

class UsersItems extends React.Component{
    // accepts users properties and displays them within the 
    // userslist component

    constructor(props){
        super(props)
    }


    // create delete function

     handleDelete = (e) =>{
        e.preventDefault();
        this.props.deleteUser (this.props.user.id);
       
       }    

       render(){
            return(       
        
            <div className="row back">
                <div className="col-md-2"><span>Username:</span><br />
                <div className="col-md-2 padd">{this.props.user.username}</div>
                   </div>  
                <div className="col-md-3 title"><span>Email:</span><br />
                <div className="col-md-3 padd">{this.props.user.email}</div>
                </div> 
                <div className="col-md-2 title"><span>Country:</span> <br />
                <div className="col-md-2 padd">{this.props.user.country}</div>
                </div>
                
                <div className="col-md-2 title"><span>Telephone:</span> <br /> 
               <div className="col-md-2 padd">{this.props.user.telephone}</div> 
                </div>
                  
                <div className="col-md-3">  
                <p className="col-md-3 title"><span>Action:</span> 
                <div className="down">           
                <button className="btn-success btn-xs">Update</button>              
                <button  className="btn-danger btn-xs" onClick={this.handleDelete}>Delete</button></div>
                </p> </div>                              
            </div>     
        );
    }
}

export default UsersItems;