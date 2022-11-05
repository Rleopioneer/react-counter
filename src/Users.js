import React, { useState, useEffect} from "react";

const Users = () => {
    const [loading, setLoading] = useState(false)
    
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
        <>
            <h1>Users</h1>
            {
                loading === true ? 'Carregando ...' : ''
            }

            {
                users.map(user => {
                    return (
                        <div style={ {margin:'10px'} }>
                            <span> {user.id} - {user.name} - Nome de usuário: {user.username} - E-mail: {user.email}</span>
                        </div>
                    )
                })
            }
        </>
    )

}

export default Users