/** 
  - El  return  del Functional Component solo debe retornar 1 elemento
    - Si no queremos enviar dentro de un  <div></div>  q contamine la semantica de la web
      - Usamos un fragment    <></>
    - Si es un form, pues:    <form> .... </form>
    - Y asi sucesivamente, solo 1 elemente HTML
    - Cuando se W con Formularios es necesario tener un listener   onChange={}
 * DOM
  - Lo correcto es verificar el   inputNmae.value.length
 */

import { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({ setCategories }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = e => {
    setInputValue(e.target.value);
    // console.log('Cambia el state con c/letra q escribimos en el input <- onChange');
  };

  const handledSubmit = e => {
    e.preventDefault();
    if (inputValue.trim().length < 2) return;

    // console.log(e.target.firstElementChild.value) // Input value
    setCategories(categories => [inputValue, ...categories]);
    setInputValue('');
  };

  return (
    <form onSubmit={handledSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
      />
    </form>
  );
};

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
};
