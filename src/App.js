import React, { useState}from "react";

import Counter from './Counter'
import Albums from './Albums'
import Users from './Users'
import './App.css'

//Melhor navegação
const defaultPage = 'counter'

const pages = {
  albums: {
    text: 'Álbuns',
    component: Albums,
  },
  counter: {
    text: 'Contador',
    component: Counter,
  },
  users: {
    text: 'Usuário',
    component: Users,
  }
}

function App() {

  const [page, setPage] = useState(defaultPage)

  const handleChangePage= page => setPage(page)

  const Page = pages[page].component

  const pageNames = Object.keys(pages)
  //cria um array com todas as chaves do objeto, que podem ser acessadas posteriormente

  return (
    <>
      
      {
        pageNames.map(page => <button onClick={() => handleChangePage(page)}> {pages[page].text} </button>)
      }

      { Page && <Page /> }
          
    </>
  )
  
}

export default App;

/*
Ou
const Page = page === 'albuns' ? Albuns : Counter 
ou
Somente renderizar o componente se ele existir, para não haver erro
{ Page && <Page /> }
ou 
{ page ==='albuns' ? <Albuns /> : <Counter /> }
 */
