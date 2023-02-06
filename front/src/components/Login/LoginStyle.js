import styled from "styled-components";

export const LoginForm = styled.div`
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  justify-content: center;
  width: 100vw;
  height: 90vh;
  gap: 2rem;

  h2 {
    margin-top: 5%;
    color: var(--color-Grey-0);
    font-size: 200%;
  }
  fieldset {
    border: none;
    gap: 1rem;
    width: 80%;
  }

  legend {
    color: var(--color-Grey-0);
    padding-bottom: 5%;
    font-size: 100%;
  }

  input {
    background-color: var(--color-Grey-2);
    border: 0.061rem solid var(--color-Grey-0);
    border-radius: 0.201rem;
    height: 30%;
    width: 100%;
    padding: 5%;
    font-size: 80%;
  }
  input::placeholder {
    padding: 0.375rem;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    width: 80vw;
    height: 90%;
    max-height: 43.750rem;

    border-radius: 0.201rem;
    box-shadow: 0 0.201rem 2.005rem -0.501rem rgba(0, 0, 0, 0.25);
    background-color: var(--color-Grey-3);
  }
  .errorMsg {
    color: var(--Color-primary);
    font-size: 80%;
  }
  .entrar {
    width: 80%;
    height: 10%;
    background-color: var(--Color-primary);
    border: 0.076rem solid var(--Color-primary);
    ;

    border-radius: 0.254rem;
    color: #fff;
    font-weight: 500;
    padding: 0%;
    font-size: 80%;
    opacity: 0.7;
  }

  .entrar:hover {
    background-color: var(--Color-primary-Focus);
    border: 0.076rem solid var(--Color-primary-Focus);
  }

  p {
    font-size: 80%;
    color: var(--color-Grey-1);
  }

  .cadastrar {
    width: 80%;
    height: 10%;
    background-color: var(--color-Grey-1);
    border: 0.076rem solid var(--color-Grey-1);

    

    border-radius: 0.254rem;
    color: #fff;
    font-weight: 500;
    padding: 0%;
    font-size: 80%;
    opacity: 0.7;
  }

  .cadastrar:hover {
    background-color: var(--color-Grey-2);
    border: 0.076rem solid var(--color-Grey-2);
  }

  @media (min-width: 500px) {
    form {
      width: 28.125rem;
    }
  }
`;
