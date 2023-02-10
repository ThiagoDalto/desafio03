import styled from "styled-components";

export const ModalAdd = styled.div`
    position: fixed;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.45);
`;
export const ContainerForm = styled.div`
      position: fixed;
    top: 3.750rem;
    border-radius: 4px;
    width: 80%;
    max-width: 31.250rem;
    height: 50%;
    
    border: 0 solid var(--color-Grey-3);
    background-color: var(--color-Grey-3);
    

    

`;
export const SuporteContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: .5rem 1rem 1rem 1rem;
    background-color: var(--color-Grey-2);
    border-radius: 4px 4px 0 0 ;
    width: 100%;
    max-width: 31.250rem;
    

    .modalTitle{
        font-size: 100%;
        font-weight: 700;
        color: var(--color-Grey-0);
    }
    .closeBtn{
        background-color: transparent;
        border: none;
        color: var(--color-Grey-1);
        font-size: 1.5rem;
    }

    .updateBtn{
        background-color: transparent;
        border: none;
        color: var(--color-Grey-1);
        font-size: 1.5rem;
    }
`;

export const FormTech = styled.form`
    display: flex;
    flex-direction: column;
        align-items: center;
    justify-content: space-evenly;
    height: 80%;
    width: 100%;
    max-width: 31.250rem;
    position: relative;
    padding: 1rem;
    
    label{
        color: var(--color-Grey-0);
    }
    
    .errorMsg{
        color: var(--Color-primary);
        font-size: 110%;
        position: absolute;
        left:11%;
        
        


    }
    .formData1{
    width: 80%;
    gap: 1rem;
    
    height: 15%;

    border-radius: 0.254rem;
    color: #fff;
    font-weight: 500;
    padding: 0%;
    font-size: 80%;
    opacity: 0.7;
    position: absolute;
    top: 10%;
        
    }
    .formData2{
    width: 80%;
    gap: 1rem;
    
    height: 15%;
    max-height: fit-content;

    border-radius: 0.254rem;
    color: #fff;
    font-weight: 500;
    padding: 0%;
    font-size: 80%;
    opacity: 0.7;
    position: absolute;
    top: 35%;
        
    }
    .formData3{
    width: 80%;
    gap: 1rem;
    
    height: 15%;
    max-height: fit-content;

    border-radius: 0.254rem;
    color: #fff;
    font-weight: 500;
    padding: 0%;
    font-size: 80%;
    opacity: 0.7;
    position: absolute;
    top: 60%;
        
    }


    .formEnter{
    background-color: var(--color-Grey-2);
    /* border: 0.061rem solid var(--color-Grey-0); */
    border: 0.061rem solid var(--color-Grey-0);
    border-radius: 0.201rem;
    height: 100%;
    width: 100%;
    padding-left: 5%;
    font-size: 200%;

    &:focus{
       
    }
    }

    label{
        font-size: 150%;
        margin-bottom: rem;
        
    }

    select{
    background-color: var(--color-Grey-2);
    /* border: 0.061rem solid var(--color-Grey-0); */
    border-radius: 0.201rem;
    height: 30%;
    width: 100%;
    padding-left: 5%;
    font-size: 80%;
    color: var(--color-Grey-1);

    &:focus{
        border: 0.061rem solid var(--color-Grey-0);
    }
  }
  option{
    background-color: var(--color-Grey-2);
    border: 0.061rem solid var(--color-Grey-0);
    border-radius: 0.201rem;
    padding-left: 5%;
   /*  height: 30%;
    width: 0%;
    padding: 5%;*/
    font-size: 80%; 
    color: var(--color-Grey-1);
  }

    .submitBtn{
    width: 80%;
    
    background-color: var(--Color-primary);
    border: 0.076rem solid var(--Color-primary);
    height: 15%;

    border-radius: 0.254rem;
    color: #fff;
    font-weight: 500;
    padding: 0%;
    font-size: 150%;
    opacity: 0.7;
    position: absolute;
    top: 90%;
    }
`;