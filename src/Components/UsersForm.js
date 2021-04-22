import React, {useState} from 'react';

class UsersForm extends React.Component{ 

  constructor(props){
    super(props)
    
   // const [state, setState] = useState({
     this.state = {
        username:'',
        email:'',
        country:'', 
        telephone:'',
        password:''
       };
    }
  
    // a function called to handle onchange event
     handleOnChange = (event)  => {
        //event target name - hold name of input
        //event target value - hold value of input

        this.setState({
          //  ...state,
            [event.target.name]: event.target.value,
        });
      } 

      //function that is called when create new user button is clicked
     handleSubmit = () => {
        //calls adduser function passed to userform component 
        // as a property from App component
        
          this.props.addUser(this.state);
          this.setState({
            username: '',
            email: '',
            country: '',
            telephone: '',
            password: ''
          })

      }

      render(){
    return( <div>
<div className="container header">
  <h4>Users Form</h4>
  <form className="form-horizontal back">
    <div className="form-group">
      <label className="control-label col-md-1" for="username">Full Name:</label>
      <div className="col-md-3">
        <input 
            type="text" 
            className="form-control" 
            id="username" 
            placeholder="Enter your full name" 
            value={this.state.username} //value will the same as data in the state
            onChange={this.handleOnChange} // used to handle onchange
            name="username"/>
      </div>
    </div>

        <div className="form-group">
      <label className="control-label col-md-1" for="email">Email:</label>
      <div className="col-md-3">
        <input 
            type="email" 
            className="form-control" 
            id="email" 
            placeholder="Enter email" 
            value={this.state.email} 
            onChange={this.handleOnChange} // used to handle onchange 
            name="email"/>
      </div>
    </div>
       <div className="form-group">
      <label className="control-label col-md-1" for="country">Country:</label>
      <div className="col-md-3">
        <input 
            type="text" 
            className="form-control"
            id="country"
            placeholder="Enter your country"
            value={this.state.country}
            onChange={this.handleOnChange} // used to handle onchange
            name="country"/>
      </div>
    </div>
    <div className="form-group">
      <label className="control-label col-md-1" for="country">Telephone:</label>
      <div className="col-md-3">
        <input 
            type="number" 
            className="form-control"
            id="number"
            placeholder="Enter your telephone number"
            value={this.state.telephone}
            onChange={this.handleOnChange} // used to handle onchange
            name="telephone"/>
      </div>
    </div>
    <div className="form-group">
      <label className="control-label col-md-1" for="pwd">Password:</label>
      <div className="col-md-3">          
        <input 
            type="password"
            className="form-control" 
            id="password"
            placeholder="Enter password" 
            value={this.state.password}
            onChange={this.handleOnChange} 
            name="password"/>
      </div>
    </div>
    
    {/*creat new user button call handlesubmit function*/}
    <div className="form-group">        
      <div className="col-md-offset-1 col-md-2">
        <button 
        type="button" 
        onClick={this.handleSubmit}
        className="btn btn-default btn-primary">Create New User</button>
      </div>
    </div>
  </form>
</div>
</div>


    );
    } 
}
export default UsersForm;