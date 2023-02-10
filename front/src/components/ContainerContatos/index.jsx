import { useContext } from "react";
import { ContatosContext } from "../../contexts/ClienteContatos";
import {  MdOutlineDeleteSweep, MdOutlineSync } from 'react-icons/md';
import { ContatoCard, Ul } from "./ContainerStyle"
import ContatoUpdate from "../ContatoUpdate";



function ContainerContatos() {
    const { prop, setProp, contatos, deleteContato, isModalUpdateOn, setIsModalUpdateOn} = useContext(ContatosContext);
    

    function showModal(id){
        setIsModalUpdateOn(true)
        propId(id)
    }

    function propId(id){
        setProp(id)
    }

   
return(
    <>
    <Ul>
        {
            !contatos ? (
                <p >Cadastre já seus contatos!!</p>
            ) : (
                contatos.map(contato => (
                    <ContatoCard  key={contato.id}  >
                        <span className="ContatoName">{contato.name}</span> 
                        <span className="ContatoStatus">{contato.email}</span>
                        <span className="ContatoStatus">{contato.phone}</span>
                        <span className="suporteContatoStatus">
                            
                            <button className="removeBtn" onClick={() => deleteContato(contato.id)} ><MdOutlineDeleteSweep/></button>
                            <button className="removeBtn" onClick={() => showModal(contato.id)} ><MdOutlineSync/></button>
                        </span>
                    </ContatoCard>
                ))
            )
        }

    </Ul>
 
    {      isModalUpdateOn && <ContatoUpdate/>
    }
    </>
)
}

export default ContainerContatos