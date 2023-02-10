import { useContext } from "react";
import { useEffect, useState } from "react";
import { ClienteContext } from "../../contexts/ClienteContext";
import api from '../../services/api'
import BotaoCliente from "../BotaoCliente";
import ClienteUpdate from "../ClienteUpdate";
import { Header1, Header2 } from './HeaderStyle'



function Header(){
    const [cliente, setCliente] = useState([]);
    const {  isModalOn, setIsModalOn } = useContext(ClienteContext)
    
    useEffect(() => {
        const clienteID = localStorage.getItem('@CLIENTEID')
        api
        .get(`/clientes`)
        .then((response) => setCliente(response.data))
        .catch((err) => console.log(err))
      }, [])
      
 
      return (
        <Header1>
            <Header2>
                
                      
                        <span>
                          <h3>Olá, {cliente.name}</h3>
                          <span>
                            <p>{cliente.email}</p>
                            <p>{cliente.phone}</p>
                          </span>
                        </span>
                        <BotaoCliente/>
                        
                       
                    
            </Header2>
              {isModalOn && <ClienteUpdate/>}
            
        </Header1>
        

        )
}

export default Header;