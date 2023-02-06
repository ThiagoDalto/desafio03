
import { Navbar } from './NavStyle';
import Logout from '../Botao/index'



function Nav({ isLoggedIn, setIsLoggedIn }) {
  
    return(
        <Navbar  isLoggedIn={ isLoggedIn} setIsLoggedIn={setIsLoggedIn} >
            
        </Navbar>
    )
}

export default Nav;