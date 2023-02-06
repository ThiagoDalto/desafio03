import { createContext } from "react";
import { useNavigate } from  "react-router-dom";
import { toast } from 'react-toastify';
import api from "../services/api";

export const RegisContext = createContext();

function RegisterProvider({children}) {

    const navigate = useNavigate();

    function onSubmitFunction({
        name,
        email,
        password,
        phone
      }) {
        const dados = { name, email, password, phone };
        api
          .post(`/clientes`, dados)
          .then((response) => {
            navigate("/", { replace: true });
           
            toast.success("Cadastro feito com sucesso");
          })
          .catch((error) => {
            console.log(error);
            toast.error("Email já cadastrado, utilize outro e-mail");
          });
      }
      return (
        <RegisContext.Provider value={{ onSubmitFunction }} >
            {children}
        </RegisContext.Provider>
    )

}

export default RegisterProvider;