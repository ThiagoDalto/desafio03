import { useContext } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { ClienteContext } from '../../contexts/ClienteContext';

function ProtectedRoutes() {
    const { cliente, loading } = useContext(ClienteContext);
    const location = useLocation();
   
    if(loading){
        return <div>Carregando...</div>
    }

    return cliente ? (
        <Outlet />
    ) : (
        <Navigate to='/' replace state={{from: location}} />
    )
}

export default ProtectedRoutes