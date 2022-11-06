import React, { useState}from "react";

import Template from './Template'
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

  return (
    <>
      <Template pages={pages} activePage={page} onChangePage={handleChangePage}>
        { Page && <Page /> }
      </Template> 
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
