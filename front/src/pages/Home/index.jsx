import Header from "../../components/Header/Header";
import Main from '../../components/Main';
import Logout from '../../components/Botao/index'
import Nav from '../../components/Nav';

import { Div } from './homeStyles'

function Home({isLoggedIn, setIsLoggedIn, user}) {
   
    return(
        <div>
            <Div className="loggedHome">
                <Nav isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
                <Logout isLoggedIn={ isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
            </Div>
            <Header/>
            <Main/>
           
            
        </div>
    )
}

export default Home;