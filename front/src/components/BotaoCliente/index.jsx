import { useContext } from "react";
import { ClienteContext } from "../../contexts/ClienteContext";
import { MdOutlineSettings } from 'react-icons/md';
import { Btnconfig } from "./botaoClienteStyle";


function BotaoCliente(){
    const {  isModalOn, setIsModalOn } = useContext(ClienteContext);

    function openModal(){
        setIsModalOn(true)
    }

    return(
        <Btnconfig onClick={openModal}><MdOutlineSettings/></Btnconfig>
    )
}

export default BotaoCliente;