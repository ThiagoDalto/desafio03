import { useContext } from "react";
import { ContatosContext } from "../../contexts/ClienteContatos";
import {  MdOutlineDeleteSweep } from 'react-icons/md';
import { ContatoCard, Ul } from "./ContainerStyle"



function ContainerContatos() {
    const { contatos, removeContato, deleteContato} = useContext(ContatosContext)
   
return(
    <Ul>
        {
            !contatos.length > 0 ? (
                <p >Insira novos contatos</p>
            ) : (
                contatos.map(contato => (
                    <ContatoCard  key={contato.id}  >
                        <span className="ContatoName">{contato.title}</span> <span className="suporteContatoStatus">
                            <span className="ContatoStatus">{contato.status}</span>
                            <button className="removeBtn" onClick={() => deleteContato(contato.id)} ><MdOutlineDeleteSweep/></button>
                        </span>
                    </ContatoCard>
                ))
            )
        }

    </Ul>
)
}

export default ContainerContatos