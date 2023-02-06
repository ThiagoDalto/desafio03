import styled from 'styled-components';


export const BtnLogout = styled.button`
    background-color: var(--color-Grey-3);
    color: var(--color-Grey-0);
    font-weight: 600;
    font-size: 0.750rem;
    width: 3.468rem;
    height: 2.000rem;
    padding: 0 1rem;
    border-radius: 4px;
    border: 1px solid var(--color-Grey-3);
    position: absolute;
    right: 5%;
    &:hover{
        opacity: .6;
    }

    @media (min-width: 500px){
        right: 20%;
    }


`;