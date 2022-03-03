import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = category => {
  const [state, setState] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
    setTimeout(() => {
      getGifs(category).then(gifsArr => {
        setState({
          data: gifsArr,
          loading: false,
        });
      });
    }, 1000);
  }, [category]); // Se ejecuta when esta Dependency cambia

  return state; // { data:[], loading: true };
};
