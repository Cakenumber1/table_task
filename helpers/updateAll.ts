import axios from 'axios';
import { setAll } from 'store/slices/postsSlice';

export const updateAll = (
  dispatch: any,
  page = 1,
  column?: string,
  filter?: string,
  value?: string | number,
) => {
  axios.get('/api/', {
    params: {
      column,
      filter,
      value,
    },
  }).then((r: any) => {
    dispatch(setAll({
      page,
      column,
      filter,
      value,
      pages: r.data || 0,
    }));
  });
};
