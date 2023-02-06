
import { useEffect, useState } from "react";
import api from '../../services/api'
import { Header1, Header2 } from './HeaderStyle'



function Header(){
    const [users, setUsers] = useState([]);
    
    useEffect(() => {
        const userId = localStorage.getItem('@USERID')
        api
        .get(`/users/${userId}`)
        .then((response) => setUsers(response.data))
        .catch((err) => console.log(err))
      }, [])
      
 
      return (
        <Header1>
            <Header2>
                
                      
                        <h3>Olá, {users.name}</h3>
                        <p>{users.course_module}</p>
                       
                    
            </Header2>

            
        </Header1>
        

        )
}

export default Header;