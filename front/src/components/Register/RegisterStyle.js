import styled from "styled-components";

export const RegisterForm = styled.div`
  display: flex;
  align-items: flex-start;
  
  justify-content: center;
  width: 100vw;
  height: 90vh;
  gap: 2rem;

 

  h2 {
    color: var(--color-Grey-0);
    font-size: 150%;
    position: absolute;
    top: 6%;

  }
  h4{
    color: var(--color-Grey-1);
    font-size: 100%;
    position: absolute;
    top: 15%;
  }

  .subContainer{
    
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 70%;
    position: absolute;
    top: 20%;

  }
  fieldset {
    border: none;
    margin-bottom: .125rem;
    width: 80%;
    
  }

  

  legend {
    color: var(--color-Grey-0);
    padding-bottom: 0.611rem;
    font-size: 80%;
  }

  input {
    background-color: var(--color-Grey-2);
    color: var(--color-Grey-1);
    border: 0.061rem solid var(--color-Grey-0);
    border-radius: 0.201rem;
    height: 30%;
    width: 100%;
    padding: 5%;
    font-size: 100%;
    
  }

  
  
  .errorMsg{
    color: var(--Color-primary);
    font-size: 60%;
    margin-left: 1.25rem;
    margin-top: 0.1%

  }

  input::placeholder {
    padding: 0.375rem;
    color: var(--color-Grey-1);
  }

  select{
    background-color: var(--color-Grey-2);
    border: 0.061rem solid var(--color-Grey-0);
    border-radius: 0.201rem;
    height: 30%;
    width: 100%;
    padding: 5%;
    font-size: 80%;
    color: var(--color-Grey-1);
  }
  option{
    background-color: var(--color-Grey-2);
    border: 0.061rem solid var(--color-Grey-0);
    border-radius: 0.201rem;
   /*  height: 30%;
    width: 0%;
    padding: 5%;*/
    font-size: 80%; 
    color: var(--color-Grey-1);
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    width: 80vw;
    height: 103%;
    position: relative;
    max-height: 57.750rem;
   
    

    border-radius: 0.201rem;
    box-shadow: 0 0.201rem 2.005rem -0.501rem rgba(0, 0, 0, 0.25);
    background-color: var(--color-Grey-3);
  }

 
  
 
  .cadastrar {
    width: 80%;

    height: 5%;
    background-color: var(--Color-primary-Negative);
    border: 0.076rem solid var(--Color-primary-Negative);
    border-radius: 0.254rem;
    color: #fff;
    font-weight: 500;
    padding: 0%;
    font-size: 150%;
    opacity: 0.7;
    position: absolute;
    top: 92%;


  }
  .cadastrar:hover{
    opacity: 1;
  }

  @media (min-width: 500px) {
    form{
      width: 28.125rem;
    }
  }
`;


export const Div = styled.div`
   
    display: flex;
    align-items: center;
  
`