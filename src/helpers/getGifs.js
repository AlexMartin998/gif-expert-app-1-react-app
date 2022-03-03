import axios from 'axios';

export const getGifs = async category => {
  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
    category
  )}&limit=10&api_key=6GzZRiWUGgotK1zPz5Hn71BSXxkHzR5a`;
  const { data } = await axios(url);
  const { data: imagesArr } = data;

  const gifs = imagesArr.map(({ id, title, images }) => ({
    id,
    title,
    url: images?.downsized_medium?.url,
  }));
  // console.log(gifs);

  return gifs;
};
