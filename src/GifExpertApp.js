/**
 * Docs:
    https://es.reactjs.org/docs/faq-structure.html
    https://hackernoon.com/structuring-projects-and-naming-components-in-react-1261b6e18d76

 
 * React:
    const [initialState, setinItialState] = useState(initialState)

      - initialState: Estado inicial
      - setinItialState(): Function q modifica el  initialState
        - Recibe Un Data Type o Expression q Retorne algun Value
          - Reemplazara el initialState

    - Functional Component:
      - Debe retornar un Objeto con el contenido de nuestro Componente
          return (
            <> // Fragment q no genera basura en el HTML al ser renderizado

            </>
          )
      - Para renderizar Variables usamos    {}
        - Dede ser un Data Type o Expression q retorne algun value: .map() retorna un []



  - key:
    - Es la referencia q tiene React para saber q cambio en especifico y renderizar solo eso. Este key lo vamos a obtener de una DB y asi siempre sera unico
        <li key={category}>{category}</li>
    - NO puede ser el Index, y debe ser Unico
 */

import { useState } from 'react';

import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(['One Punch']);

  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={setCategories} />
      <hr />

      <ol>
        {categories.map(category => (
          <GifGrid key={category} category={category} />
        ))}
      </ol>
    </>
  );
};
