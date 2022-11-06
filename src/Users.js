import React, { useState, useEffect} from "react";
import Template from './Template'
import Loading from './Loading'

const Users = () => {
    const [isLoading, setLoading] = useState(false)
    
    //faz requisição
    useEffect(() => {
        setLoading(true)
        fetch('https://jsonplaceholder.typicode.com/users').then(res =>res.json()).then(data => {
            
            setUsers(data)
            setLoading(false)
            
        })
    }, [])

    //exibe dados da requisição
    const [users, setUsers] = useState([])

    return (
        <Template title="Usuários">
            <Loading visible={isLoading} />
            {
                users.map(user => {
                    return (
                        <div style={ {margin:'10px'} }>
                            <span> {user.id} - {user.name} - Nome de usuário: {user.username} - E-mail: {user.email}</span>
                        </div>
                    )
                })
            }
        </Template>
    )

}

export default Users