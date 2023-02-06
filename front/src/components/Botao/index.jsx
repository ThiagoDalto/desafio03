import { useNavigate } from "react-router-dom";
import {BtnLogout} from './LogoutStyle' 

function ButtonLogout({ isLoggedIn, setIsLoggedIn }) {
    let navigate = useNavigate();

function Logout(){
    window.localStorage.clear();
    navigate("/", { replace: true });
    setIsLoggedIn(false);
}

    return(
       <BtnLogout onClick={Logout}>Sair</BtnLogout>
       )
}

export default ButtonLogout 