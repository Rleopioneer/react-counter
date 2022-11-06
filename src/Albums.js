import React, { useState, useEffect } from "react";
import Template from './Template'
import Loading from './Loading'

const Albums = () => {

    const [isLoading, setLoading] = useState(false)

    const [albums, setAlbums] = useState([])

    //Evita que a requisição seja feita toda vez que o componente for renderizado ou atualizado.
    useEffect(() => {
        setLoading(true)

        fetch('https://jsonplaceholder.typicode.com/albums').then(res => res.json()).then(data => {
            console.log(data)
            setAlbums(data)
            setLoading(false)
        })
    }, [])
    

    return (
        <Template title="Álbuns"> 
            <Loading visible={isLoading} />

            {
                albums.map(album => {
                    return (
                        <div>
                            <span> {album.title} - id: {album.id} </span>
                        </div>
                    )
                })
            }
        </Template>
    )

}

export default Albums