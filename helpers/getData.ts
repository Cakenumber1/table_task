import axios from 'axios';

// const PATH = 'https://jsonplaceholder.typicode.com/posts';
export const getData = async (path: string, params?: any) => axios.get(path, params)
  .then((res) => res.data)
  .catch(console.error);
