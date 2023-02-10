
import { createContext, useEffect, useState } from "react";

import { toast } from 'react-toastify';
import api from "../services/api";

export const ContatosContext = createContext ({});

function ContatosProvider({children}) {
    
    
    const [contatos, setContatos] = useState([]);
    const [isModalOn, setIsModalOn] = useState(false);
    const [isModalUpdateOn, setIsModalUpdateOn] = useState(false);
    const [prop, setProp] = useState('')
   
   

    function saveNewContato(formData) {
        if(!formData.name) return;
    
        const newContato= {
         
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
        };
    
        setContatos([...contatos, newContato]);
    }

            
                       

    function removeContato(id) {
        
        const newListContato = contatos.filter((contato) => contato.id !== id)
        setContatos(newListContato)
       
    }

    function onSubmitFunction(data) {
        const token = localStorage.getItem('@TOKEN');
        
        const dados = {name: data.name, email: data.email, phone: data.phone};
        
        if(token){
           try {api.defaults.headers.authorization = `Bearer ${token}`;
        api.post(`/contatos`, dados)
        .then((response) => {
           console.log(response.data)
           setContatos([response.data])
           localStorage.setItem('@CONTATOS', JSON.stringify( response.data));
            toast.success('Contato cadastrado com sucesso');
            
        })
        .catch(error => {
            console.log(error);
            toast.error("Cliente já tem este contato cadastrado.");
        }) }catch(error){
            console.error(error)
          }
        }
         


    }

    useEffect(() => {
        async function getContatoUser() {
          const token = localStorage.getItem('@TOKEN');
          
          if(token){
            try { api.defaults.headers.authorization = `Bearer ${token}`;
             await api.get(`/contatos`).then(res => {
              console.log(res.data)
              setContatos(res.data)
  
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
        
      }, []);


      function onSubmitFunctionUpdate(data) {
         
        const token = localStorage.getItem('@TOKEN');
        
        
        const dados = {name: data.name, email: data.email, phone: data.phone};
        
        if(token){
           try {
            api.defaults.headers.authorization = `Bearer ${token}`;
                api.patch(`/contatos/${prop}`, dados)
                .then((response) => {

           localStorage.setItem('@CONTATOS', JSON.stringify( response.data));
           toast.success('Contato atualizado com sucesso');
           setTimeout(window.location.reload(), 7000)
            
        })
        .catch(error => {
            console.log(error);
            toast.error("Contato não cadastrado.");
        }) }catch(error){
            console.error(error)
          }
        }
         


    }

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
        <ContatosContext.Provider value={{ prop, setProp, contatos, setContatos, saveNewContato, removeContato, isModalOn, setIsModalOn, onSubmitFunction, deleteContato, onSubmitFunctionUpdate, isModalUpdateOn, setIsModalUpdateOn }}>
            {children}
        </ContatosContext.Provider>
    )
}

export default ContatosProvider;