
import { createContext, useEffect, useState } from "react";
import { useNavigate } from  "react-router-dom";
import { toast } from 'react-toastify';
import api from "../services/api";

export const ClienteContext = createContext();

function ClienteProvider({children}) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isModalOn, setIsModalOn] = useState(false);
    const [cliente, setCliente] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    


    useEffect(() => {
      async function loadCliente() {
        const token = localStorage.getItem('@TOKEN');
        
        if(token){
          try { api.defaults.headers.authorization = `Bearer ${token}`;
           await api.get('/clientes').then(res => {
           
            setCliente(res.data)

          }).catch(error => {
            navigate("/")
          })

            
        }catch(error){
          console.error(error)
        }
      }
      setLoading(false);

      }

      loadCliente();
    }, [navigate])


    async function onSubmitFunction({email, password}) {
      
        const dados = { email, password };
        api.post(`/login`, dados).then((response) => {
            const {clienteID, token} = response.data;
            
         
            window.localStorage.clear();
            window.localStorage.setItem('@TOKEN', response.data.token);
            window.localStorage.setItem('@CLIENTEID', response.data.clienteID);
            
            api.defaults.headers.authorization = `Bearer ${token}`;

          navigate('/home',{ replace: true });
          toast.success('Login realizado com sucesso');
          setCliente(clienteID);
          setIsLoggedIn(true)
          
        }).catch((error) => {
            console.log(error);
            window.localStorage.clear();
            toast.error('Verifique o E-mail ou Senha')
        })
        
      }

      async function onSubmitFunctionUpdate(data) {
        const token = localStorage.getItem('@TOKEN');
        const id = localStorage.getItem('@CLIENTEID');
        const dados = { name: data.name, email: data.email, phone: data.phone, password: data.password };
    
        if (token) {
            try {
                console.log('Before API call');
                api.defaults.headers.authorization = `Bearer ${token}`;
                const response = await api.patch(`/clientes/${id}`, dados);
                setCliente(response.data);
                setTimeout(window.location.reload(), 7000)
                toast.success('Cliente atualizado com sucesso');
                return response;
            } catch (error) {
                console.error(error);
                toast.error("Cliente não atualizado.");
            }
            console.log('After API call');
        }
    }
    
   async function deleteCliente(id){
      
      
     
      api
      .delete(`/clientes/${id}`)
      .then(response => {
        
        toast.success('Cliente deletado com sucesso');
        setCliente(null)
        window.localStorage.clear();
        setIsLoggedIn(false);
        navigate("/", { replace: true });
          
      })
      .catch(err => {
          toast.error("Erro ao deletar cliente."); 
      })
  }


    return (
        <ClienteContext.Provider value={{ cliente, setCliente, onSubmitFunction, isLoggedIn, setIsLoggedIn, loading, isModalOn, setIsModalOn, onSubmitFunctionUpdate, deleteCliente }} >
            {children}
        </ClienteContext.Provider>
    )

}

export default ClienteProvider;