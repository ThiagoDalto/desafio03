
import { createContext, useEffect, useState } from "react";
import { useNavigate } from  "react-router-dom";
import { toast } from 'react-toastify';
import api from "../services/api";

export const ClienteContext = createContext();

function ClienteProvider({children}) {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [cliente, setCliente] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();


    useEffect(() => {
      async function loadCliente() {
        const token = localStorage.getItem('@TOKEN');
        
        if(token){
          try { api.defaults.headers.authorization = `Bearer ${token}`;
           await api.get(`/clientes/${localStorage.getItem("@CLIENTEID")}`).then(res => {
           
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

/* 
    useEffect(() => {
      async function loaduser() {
        const token = localStorage.getItem('@TOKEN');
        if(token){
          try { api.defaults.headers.authorization = `Bearer ${token}`;
            const { data } = await api.get('/users')
            console.log('Busquei usuário: ', data)

            setUser(data)
        }catch(error){
          console.error(error)
        }
      }
      setLoading(false);

      }

      loaduser();
    }, [])

     */
    async function onSubmitFunction({email, password}) {
      
        const dados = { email, password };
        api.post(`/login`, dados).then((response) => {
            const {cliente: clienteResponse, token} = response.data;
            
           
            window.localStorage.clear();
            window.localStorage.setItem('@TOKEN', response.data.token);
            window.localStorage.setItem('@CLIENTEID', response.data.cliente.id);
            
            api.defaults.headers.authorization = `Bearer ${token}`;

          navigate('/home',{ replace: true });
          toast.success('Login realizado com sucesso');
          setCliente(clienteResponse);
          setIsLoggedIn(true)
    
        }).catch((error) => {
            console.log(error);
            window.localStorage.clear();
            toast.error('Verifique o E-mail ou Senha')
        })
        
      }


    return (
        <ClienteContext.Provider value={{ cliente, setCliente, onSubmitFunction, isLoggedIn, setIsLoggedIn, loading }} >
            {children}
        </ClienteContext.Provider>
    )

}

export default ClienteProvider;