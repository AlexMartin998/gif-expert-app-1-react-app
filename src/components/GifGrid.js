/** useEffect
  - Inconveniente:
    - Se ejecuta el todo el codigo del componente. Con cada click se hace una nueva peticion a la API

 * useEffect(cb, [DependencyList])
  - Permite ejecutar codigo de manera condicional
  - Si la Lista de Dependencias esta VACIA [], lo q tenemos dentro del cb del   useEffect se ejecutara SOLO UNA VEZ (cuando el Componente se Renderiza por 1era vez).
        useEffect(() => {
          getGifs();
        }, []);



 ** Custo Hooks
  - Funcionan como si fueran Functional Components
    - Pueden hacer todo lo q hacen las FC
  - Se los crea en el directorui  hooks/  dentro de src/
  - Estos  SI  requieren la importacion de React
        import React from 'react';
 */

import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {
  const { data: gifsArr, loading } = useFetchGifs(category);

  return (
    <>
      <h3 className="animate__animated animate__fadeIn">{category}</h3>

      {loading && (
        <p className="animate__animated animate__flash">Loading...</p>
      )}

      <div className="card-grid">
        {gifsArr.map(gif => (
          <GifGridItem key={gif.id} {...gif} />
        ))}
      </div>
    </>
  );
};
