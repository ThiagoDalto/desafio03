import styled from 'styled-components'


export const BtnBack = styled.button`
    background-color: var(--color-Grey-3);
    color: var(--color-Grey-0);
    font-weight: 600;
    font-size: 0.750rem;
    width: 3.468rem;
    height: 2.000rem;
    border-radius: 4px;
    border: 1px solid var(--color-Grey-3);
    position: absolute;
    right: 15%;

    @media (min-width: 500px){
        right: 25%;
    }


    &:hover{
        opacity: .6;
    }
`;