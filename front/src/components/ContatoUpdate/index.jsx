import { useContext } from "react";
import { ContatosContext } from "../../contexts/ClienteContatos";
import { MdClear} from 'react-icons/md';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { contatoUpdateSchema } from "../../validators/RegisterCliente";
import { ContainerForm, SuporteContainer, FormTech, ModalAdd } from "./updateContatoStyle";



function ContatoUpdate() {
   
    const { prop, isModalUpdateOn, setIsModalUpdateOn, onSubmitFunctionUpdate } = useContext(ContatosContext);
            
        const {
           register,
           handleSubmit,
           formState: { errors },
         } = useForm({
           resolver: yupResolver(contatoUpdateSchema),

         });

         function closeModal(){
            setIsModalUpdateOn(false)
         }

         

    return (
        <ModalAdd>
        <ContainerForm className="modalCadastro">
            <SuporteContainer className="headerForm">
                <h2 className="modalTitle">Atualizar Contato</h2>
                <button className="closeBtn" onClick={closeModal} ><MdClear/></button>
                
            </SuporteContainer>
            <FormTech onSubmit={handleSubmit(onSubmitFunctionUpdate)}>
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
            </FormTech>
        </ContainerForm>
        </ModalAdd>
    )
}

export default ContatoUpdate;
