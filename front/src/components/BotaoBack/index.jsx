import { useNavigate } from "react-router-dom";
import { BtnBack } from './BtnBackStyle'

function ButtonBack() {
    let navigate = useNavigate();

function backToLoginPage(){
    
    navigate("/", { replace: true });
   
}

    return(
       <BtnBack onClick={backToLoginPage}>voltar</BtnBack>
       )
}

export default ButtonBack 