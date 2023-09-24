import './App.css';
import Header from './Header';
import Navbar from './Navbar';
import { userContext } from './Context';
import { useState } from 'react'

function App() {

  const [loggedUser, setLoggedUser] = useState(true);
  const changeUserContext = () => {
    setLoggedUser(!loggedUser);
  }

  return (
    <div className="App">
      <userContext.Provider value={loggedUser}>
        <Header/>
        <Navbar/>
        <footer></footer>
      </userContext.Provider>
    </div>
  );
}

export default App;
