import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
* {
  margin:0;
  padding: 0;
  outline:0;
  box-sizing: border-box;
}
  :root {
    --color-background: #000000;
    //Primary Palette
    --Color-primary: #FF577F;
    --Color-primary-Focus: #FF427F;
    --Color-primary-Negative:#59323F;
    //Grey Scale Palette
    --color-Grey-4: #121214;
    --color-Grey-3: #212529;
    --color-Grey-2: #343B41;
    --color-Grey-1: #868E96;
    --color-Grey-0: #F8F9FA;
    //Feedback Palette
    --color-Sucess: #3FE864;
    --color-Negative: ##E83F5B;
    font-size: 80%;   
  }
  @media (min-width: 700px) {
    :root {
      font-size: 62.5%;
    }
  }
  
  body,html{
    width: 100vw;
    height: 100vh;
  }
  body {
    background: var(--color-background);
    color: var(--color-text);
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
  }
  body, input, button, textarea {
    font-family: 'Inter', sans-serif;
    font-size: 1rem;
  }
  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 700;
  }
  button {
    cursor: pointer;
  }
  a {
    text-decoration: none;
  }
  /* width */
  ::-webkit-scrollbar {
    width: 10px;
  }
  /* Track */
  ::-webkit-scrollbar-track {
    background: var(--color-text-light);
    margin: 1rem;
    border-radius: 1.6rem;
  }
  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: var(--color-primary-dark);
    border-radius: 1.6rem;
  }
  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: var(--color-primary);
  }
`;