import {Principal} from './StyleMain'
import {MdAdd} from 'react-icons/md';
import { useContext,  } from 'react';
import ContainerContatos from '../ContainerContatos'; 
import NewContatoForm from '../NewContatos';
import { ContatosContext } from '../../contexts/ClienteContatos';

function Main() {
    
    const {  isModalOn, setIsModalOn } = useContext(ContatosContext)

    function showModal(){
        setIsModalOn(true)
    }

    return(
        <Principal>
            <div className='suporteContainer'>
                <h2>Contatos</h2>
                <button className='addBtn' onClick={showModal}><MdAdd/></button>
            </div>
            <ContainerContatos/> {
                isModalOn && <NewContatoForm />
            }
           

            
        </Principal>
    )

}

export default Main;