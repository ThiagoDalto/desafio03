
import { createContext, useEffect, useState } from "react";

import { toast } from 'react-toastify';
import api from "../services/api";

export const ContatosContext = createContext ({});

function ContatosProvider({children}) {
    
    
    const [contatos, setContatos] = useState([]);
   
   
    const [isModalOn, setIsModalOn] = useState(false);

    function saveNewContato(formData) {
        if(!formData.title) return;
    
        const newContato= {
         
            title: formData.title,
            status: formData.status
        };
    
        setContatos([...contatos, newContato]);
        
    }

            
                       

    function removeContato(id) {
        
        const newListContato = contatos.filter((contato) => contato.id !== id)
        setContatos(newListContato)
       
    }

    function onSubmitFunction(data) {
        
        const dados = {title: data.title, status: data.status, id: data.id};
       
         api
        .post(`/contatos`, dados)
        .then((response) => {
           
           setContatos([...contatos, response.data])
           localStorage.setItem('@CONTATOS', JSON.stringify( response.data));
            toast.success('Contato cadastrado com sucesso');
            
        })
        .catch(error => {
            console.log(error);
            toast.error("Cliente já tem este contato cadastrado.");
        }) 


    }

    useEffect(() => {
        async function getContatoUser() {
          const token = localStorage.getItem('@TOKEN');
          
          if(token){
            try { api.defaults.headers.authorization = `Bearer ${token}`;
             await api.get(`/clientes/${localStorage.getItem("@CLIENTEID")}`).then(res => {
             
              setContatos(res.data.Contatos)
  
            }).catch(error => {
                console.log(error);
                toast.error("Cliente não tem contato cadastrado.");
            })
  
              
          }catch(error){
            console.error(error)
          }
        }
       
        
    }
    getContatoUser()
        
      }, [])
     
    

    function deleteContato(id){
        api
        .delete(`/contatos/${id}`)
        .then(res => {
            
            const newListContato = contatos.filter((contato) => contato.id !== id);
            setContatos(newListContato);
            toast.success('Contato deletado com sucesso');
            
        })
        .catch(err => {
            toast.error("Erro ao deletar contato."); 
        })
    }
 

    return(
        <ContatosContext.Provider value={{ contatos, setContatos, saveNewContato, removeContato, isModalOn, setIsModalOn, onSubmitFunction, deleteContato }}>
            {children}
        </ContatosContext.Provider>
    )
}

export default ContatosProvider;