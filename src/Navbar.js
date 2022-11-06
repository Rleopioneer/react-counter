import React from 'react'

const Navbar = ({pages, onChangePage}) => {
    const pageNames = Object.keys(pages)
    //cria um array com todas as chaves do objeto, que podem ser acessadas posteriormente

    return (
        <nav>
            { pageNames.map(page => <button onClick={() => onChangePage(page)}> {pages[page].text} </button>) }
        </nav>
    )
}

export default Navbar