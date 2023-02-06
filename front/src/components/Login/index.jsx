import { LoginForm } from "./LoginStyle";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import 'react-toastify/dist/ReactToastify.min.css';
import { useContext } from "react";
import Nav from '../Nav'
import { ClienteContext } from "../../contexts/ClienteContext";
import { schema } from "../../validators/RegisterCliente"

function Login({isLoggedIn, setIsLoggedIn}) {
 const { onSubmitFunction } = useContext(ClienteContext)

  const navigate = useNavigate();


  const {
    register,
    handleSubmit,
    formState: { errors }, 
  } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <>
    <Nav isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
    
    <LoginForm isLoggedIn ={isLoggedIn} setIsLoggedIn={setIsLoggedIn}>
      <form onSubmit={handleSubmit(onSubmitFunction)} >
        <h2>Login</h2>
        <fieldset>
          <legend htmlFor="email">Email</legend>
          <input type="text" name="email" id="email" placeholder="E-mail" {...register("email")} />
          <p className="errorMsg">{errors.email?.message}</p>
        </fieldset>
        <fieldset>
          <legend htmlFor="password">Senha</legend>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Senha"
            {...register("password")}
          />
          <p className="errorMsg">{errors.password?.message}</p>
        </fieldset>
        <button className="entrar" type="submit" >
          Entrar
        </button>
        <p>Ainda não possui uma conta?</p>
        <button
          className="cadastrar"
          onClick={() => navigate("/register", { replace: true })}
        >
          Cadastre-se
        </button>
      </form>
    </LoginForm>

    </>
  );
}

export default Login;
