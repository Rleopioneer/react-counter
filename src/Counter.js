//useState e useEffect
import React, { useState, useEffect } from "react";
import Template from './Template'

//método para gerenciar estado do componente
import './Counter.css'

//criar função para adicionar evento de click, precisa ser dentro do componente
//retora um array c um estado e uma função para alterar o estado
const Counter = () => {
  
      
      const [count, setCount] = useState(0)

      //recebe callback e array de dependências
      useEffect(() => {
        console.log('renderizou')}
        , [count]) //executa a função toda vez que a variável for modificada

      //"handle' = função que gerencia um evento
      const handleClick = operator => {
          const newCount = operator === '+' ? count + 1 : count - 1
          setCount(newCount)
      }
    //passar função como callback
  return (

      <Template title="Contador">
        <div className="counter">
          <span>{count}</span>
          <button onClick={() => handleClick('-')} >-</button>
          <button onClick={() => handleClick('+')} >+</button>
        </div>
      </Template>
  )
  
}

export default Counter;