import React, { useState } from "react";
//método para gerenciar estado do componente
import './Counter.css'


//criar função para adicionar evento de click, precisa ser dentro do componente
const Counter = () => {
    //retora um array c um estado e uma função para alterar o estado
    const [count, setCount] = useState(0)

    //"handle' = função que gerencia um evento
    const handleClick = operator => {
        const newCount = operator === '+' ? count + 1 : count - 1
        setCount(newCount)
    }
    //passar função como callback
  return (
    <div className="counter">
      <span>{count}</span>
      <button onClick={() => handleClick('-')} >-</button>
      <button onClick={() => handleClick('+')} >+</button>
    </div>
  )
  
}

export default Counter;