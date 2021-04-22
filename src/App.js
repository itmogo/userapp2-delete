import logo from "./logo.svg";
import "./App.css";
import React from "react";
import UsersForm from "./Components/UsersForm";
import UsersList from "./Components/UsersList";
import UsersItems from "./Components/UsersItems";
import { useState } from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }
  //const [users, setUsers] = useState([]);
  //this is a helper function that adds a new user to our users state
  //we later pass this function to userform component to be called anytime
  //we want to create a new user

  addUser = (user) => {
    //create a user id
    user.id = Math.random().toString();
    //user.id = 100 * Math.random() * 100000;
    this.setState({
      users: [...this.state.users, user],
    });

    //setUsers([...users, user]);
  };

  // create delete a user function
  deleteUser = (id) => {
    //  deleteUser = (id) => {
    //let undeletedUsers = this.state.users.filter(user => user.id !== id);

    this.setState({
      // verify if this should be included here
      users: this.state.users.filter((user) => user.id !== id),
      // users: undeletedUsers
    });
  };

  render() {
    return (
      <div className="container border">
      <div className="row">
        <div className="col-md-4">
          
          <UsersForm addUser={this.addUser} />
        </div>

        <div className="col-md-8 ">
          {/* we pass the users down to userlist component to be displayed */}
          <UsersList allUsers={this.state.users} deleteUser={this.deleteUser} />
        </div>
      </div>
      //</div>
    );
  }
}
export default App;

/* we pass the addUser function to userform as a props to be called whenever
          we want to create a new user */
