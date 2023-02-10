import { useContext } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ClienteContext } from "../../contexts/ClienteContext";
import { clienteUpdateSchema } from "../../validators/RegisterCliente";
import { ContainerForm, FormTech, ModalAdd, SuporteContainer } from "./clienteUpdateStyle"
import { MdClear } from "react-icons/md";


function ClienteUpdate(){

   
    const {  setIsModalOn, onSubmitFunctionUpdate, deleteCliente, cliente } = useContext(ClienteContext);
            
    const {
       register,
       handleSubmit,
       formState: { errors },
     } = useForm({
       resolver: yupResolver(clienteUpdateSchema),

     });

     function closeModal(){
        setIsModalOn(false)
        console.log(cliente.id)
     }

return (
    <ModalAdd>
    <ContainerForm className="modalCadastro">
        <SuporteContainer className="headerForm">
            <h2 className="modalTitle">Configurações Do Cliente</h2>
            <button className="closeBtn" onClick={closeModal} ><MdClear/></button>
            
        </SuporteContainer>
        <FormTech onSubmit={handleSubmit(onSubmitFunctionUpdate)}>
            <p className="infoUpdate">para atualizar os seus dados:</p>
            <div className="formData1">
                <label htmlFor="name">Nome</label>
                <input
                className="formEnter"
                name="name"
                 type="text"
                 placeholder="Digite um Contato"
                 {...register("name")}
                  />
            <p className="errorMsg">{errors.name?.message}</p>
            </div>
            <div className="formData2" >
            <label htmlFor="email">Email</label>
                <input
                className="formEnter"
                name="email"
                 type="email"
                 placeholder="Digite um Email"
                 {...register("email")}
                  />
            <p className="errorMsg">{errors.email?.message}</p>
            </div>
            <div className="formData3" >
            <label htmlFor="password">Senha</label>
                <input
                className="formEnter"
                name="password"
                 type="password"
                 placeholder="Digite uma senha"
                 {...register("password")}
                  />
            <p className="errorMsg">{errors.password?.message}</p>
            </div>
            <div className="formData4" >
            <label htmlFor="phone">Telefone</label>
                <input
                className="formEnter"
                name="phone"
                 type="text"
                 placeholder="Digite um Telefone"
                 {...register("phone")}
                  />
            <p className="errorMsg">{errors.phone?.message}</p>
            </div>
            <button className="submitBtn" type="submit" >Atualizar</button>
            <p className="infoDelete">Para excluir sua conta</p>
            <button className="deleteBTN" onClick={() => deleteCliente(cliente.id)} >Deletar</button>
        </FormTech>
    </ContainerForm>
    </ModalAdd>

)
}

export default ClienteUpdate;