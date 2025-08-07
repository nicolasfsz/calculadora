import { useState } from 'react';

export default function Text() {
  const [compras, setCompras] = useState<any[]>([])
  const [item, setItem] = useState('');

  const adicionar = (Itemadiocionar : any) => {
    setCompras([...compras, Itemadiocionar])
  };
  const remover = (removerIndex: number) => {
    setCompras(compras.filter((_, index) => index !== removerIndex));
  }
  return (
    <>

      <button onClick={adicionar}>Adicionar</button>
      <h1>Par</h1>
    {
      <>
      <ul>
        {compras.map((compra, index) => (
          <li key={index}>
            <p>(compra)
            {item} <button onClick={() => remover(index)}>Remover</button>
            </p>
          </li>
        ))
        }
      </ul>
    </>
  }
  <input onChange = {(e) => setItem(e.target.value)}></input>
  <button onClick={()=>adicionar(item)}>Adicionar</button>
  </>
  )
}