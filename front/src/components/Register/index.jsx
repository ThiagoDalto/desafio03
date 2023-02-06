import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { RegisterForm, Div } from "./RegisterStyle";
import "react-toastify/dist/ReactToastify.min.css";
import Nav from '../../components/Nav'
import  { formSchema } from '../../validators/RegisterCliente'
import BotaoBack from '../BotaoBack'
import { RegisContext } from '../../contexts/RegisterContext'
import {useContext} from 'react'

function Register() {

  const { onSubmitFunction } = useContext(RegisContext)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  return (
    <>
    <Div >
      <Nav/>
      <BotaoBack/>
      </Div>
     
    <RegisterForm>
      <form onSubmit={handleSubmit(onSubmitFunction)}>
        <h2>Crie sua conta</h2>
        <h4>Rápido e grátis, vamos nessa</h4>
        <div className="subContainer">
          <fieldset>
            <legend>Nome</legend>
            <input
              type="text"
              name="name"
              id="nome"
              placeholder="Digite aqui seu nome"
              {...register("name")}
             />
            <p className="errorMsg">{errors.name?.message}</p>
          </fieldset>
          <fieldset>
            <legend>Email</legend>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Digite aqui seu email"
              {...register("email")}
            />
            <p className="errorMsg">{errors.email?.message}</p>
          </fieldset>
          <fieldset>
            <legend>Senha</legend>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Digite aqui sua senha"
              {...register("password")}
            />
            <p className="errorMsg">{errors.password?.message}</p>
          </fieldset>
          <fieldset>
            <legend>Confirmar Senha</legend>
            <input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              placeholder="Digite novamente sua senha"
              {...register("confirmPassword")}
            />
            <p className="errorMsg">{errors.confirmPassword?.message}</p>
          </fieldset>
          <fieldset>
            <legend>Telefone</legend>
            <input
              type="text"
              name="phone"
              id="phone"
              placeholder="Somente números!"
              {...register("phone")}
            />
            <p className="errorMsg">{errors.phone?.message}</p>
          </fieldset>
          
          
        </div>

        <button className="cadastrar" type="submit">
          Cadastrar
        </button>
      </form>
    </RegisterForm>
    </>
  );
}


export default Register;
