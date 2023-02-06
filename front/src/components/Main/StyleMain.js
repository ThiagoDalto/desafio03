import styled from 'styled-components'

export const Principal =  styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color:#000000;
    color: #FFF;
    
    .suporteContainer{
        width: 60%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: #000000;
    
    }
    h2 {
        
    }

    .addBtn{
        border: 1px solid var(--color-Grey-3);
        border-radius: 4px;
        background-color: var(--color-Grey-3);
        color: #FFF;
        font-weight: 900;
        font-size: 1.5rem;
        display: flex;
        align-items: center;

        &:hover{
            opacity: 0.7;
        }
       
    }

`;