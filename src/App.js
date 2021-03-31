import logo from './logo.svg';
import './App.css';
import UsersForm from './Components/UsersForm';
import UsersList from './Components/UsersList';
import { useState} from 'react';


function App() {

  const [users, setUsers] = useState([]);
  //this is a helper function that adds a new user to our users state
  //we later pass this function to userform component to be called anytime
  //we want to create a new user

  function addUser(user){
    setUsers([...users, user]);
  }

  return (
    <div className="container border">
      <div className="row">
        <div className="col-md-4">          
          {/* we pass the addUser function to userform as a props to be called whenever
          we want to create a new user */}
          <UsersForm  addUser={addUser} />
        </div>
        
        <div className="col-md-8">
          {/* we pass the users down to userlist component to be displayed */}
          <UsersList allUsers={users} />
          
        </div>
      </div>
      </div> 
  );
}

export default App;
