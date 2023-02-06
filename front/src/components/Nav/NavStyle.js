import styled from 'styled-components';


export const Navbar = styled.nav`
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: black;
    height: 7vh;
    figure{
        display: flex;
    justify-content: center;
    align-items: center;
        width: 33vw;
    }
    img{
        width: 100%;
    }

    @media (min-width: 300px){
        height: 3.125rem;
    figure{
        display: flex;
    justify-content: center;
    align-items: center;
        width: 9rem;
    }
    img{
        width: 100%;
    }
    }
    
`;