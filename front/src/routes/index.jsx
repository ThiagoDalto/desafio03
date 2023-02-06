import { Route, Routes, Navigate } from 'react-router-dom';
import Login from '../components/Login';
import Register from '../components/Register';
import Home from '../pages/Home'
import {useContext} from 'react';
import  { ClienteContext } from '../contexts/ClienteContext';
import ProtectedRoutes from '../components/ProtectedRoutes';

const RoutesMain = () => {
   const {isLoggedIn, setIsLoggedIn} = useContext(ClienteContext)
    return (
        <Routes>
            <Route path='/'  element={<Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />} />
            <Route path='*' element={<Navigate to='/' />} />
            <Route path='/register' element={<Register />} />
             <Route element={<ProtectedRoutes />}>
            <Route exact path= '/home' element={<Home isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />} />
                
                </Route> 
        </Routes> 
    )
}

export default RoutesMain