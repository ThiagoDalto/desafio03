import Global from "./styles/global";
//import {useState} from 'react'
//import Nav from "./components/Nav/index";
import Routes from "./routes/index";
import { ToastContainer } from "react-toastify";
import ClienteContext from "./contexts/ClienteContext";
import RegisterContext from "./contexts/RegisterContext";


function App() {
  
  return (
    <>
      <Global />
      {/* <Nav isLoggedIn={ isLoggedIn} setIsLoggedIn={setIsLoggedIn}/> */}
      
      <Routes  />

     
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}

export default App;
