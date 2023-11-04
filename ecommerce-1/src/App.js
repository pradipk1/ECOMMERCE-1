
import { useState } from 'react';
import './App.css';
import AllRoutes from './Components/AllRoutes/AllRoutes';
import Navbar from './Components/Navbar/Navbar';
import loginContext from './Components/Context/Context';
import SidebarNav from './Components/SidebarNav/SidebarNav';
import Backdrop from './Components/Backdrop/Backdrop';

function App() {

  const [userData, setUserData] = useState({
    userName:'P',
    userEmail:'p@k',
    userPassword:'pkl',
    isLoggedIn: false,
  });
  // console.log(userData);

  const [isSidebarNavOpen, setIsSidebarNavOpen] = useState(false);

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
        <Navbar setIsSidebarNavOpen={setIsSidebarNavOpen}/>
        <SidebarNav isSidebarNavOpen={isSidebarNavOpen} setIsSidebarNavOpen={setIsSidebarNavOpen}/>
        {
          isSidebarNavOpen && <Backdrop setIsSidebarNavOpen={setIsSidebarNavOpen}/>
        }
        <AllRoutes />
      </loginContext.Provider>
      
    </>
  );
}

export default App;
