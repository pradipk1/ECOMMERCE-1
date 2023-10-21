
import { useState } from 'react';
import './App.css';
import AllRoutes from './Components/AllRoutes/AllRoutes';
import Navbar from './Components/Navbar/Navbar';
import loginContext from './Components/Context/Context';

function App() {

  const [userData, setUserData] = useState({
    userName:'',
    userEmail:'',
    userPassword:'',
    isLoggedIn: false,
  });
  // console.log(userData);

  const fnRegister = (data) => {
    setUserData(data)
  }

  const fnLoggedIn = () => {
    setUserData({
      ...userData,
      isLoggedIn: true
    });
    alert('Logged in successfully!');
  }

  const fnLoggedOut = () => {
    setUserData({
      ...userData,
      isLoggedIn: false,
    });
  }

  return (
    <>
      <loginContext.Provider value={{userData, fnRegister, fnLoggedIn, fnLoggedOut}}>
        <Navbar />
        <AllRoutes />
      </loginContext.Provider>
      
    </>
  );
}

export default App;
