import styled from 'styled-components';
export const Ul = styled.ul`
    margin-top: 1rem;
    width: 60%;
    background-color: var(--color-Grey-3);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1.5rem;
    gap: 0.35rem;
    border-radius: .25rem;
`;

export const ContatoCard = styled.li`

    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    background-color: var(--color-Grey-4);
    padding: 0 1.5rem;
    border-radius: .25rem;
    box-shadow: 5px 5px 15px 5px #000000;
    
    &:hover{
        background-color: var(--color-Grey-3);
    }

    .techName{
        color: var(--color-Grey-0);
        font-weight: 700;
    }
    .techStatus{
        font-weight: 700;
        color: var(--color-Grey-1);
        border: 0.065rem solid var(--color-Grey-1);
        border-radius: 1rem;
        padding: 0 0.5rem;
    }
    .suporteTechStatus{
        margin-right: .125;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .removeBtn{
        margin-left: .125;
        width: 1.5rem;
        font-size: 200%;
        border: none;
        color: var(--color-Grey-1);
        background-color: transparent;
        display: flex;
        
        &:hover{
            color: #ffffff;
            
        }
    }
`;