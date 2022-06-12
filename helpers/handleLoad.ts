import { getData } from 'helpers/getData';
import { loadPosts, PostsType, setLoading } from 'store/slices/postsSlice';
import { AppDispatch } from 'store/store';
import { IQueryAndPage } from 'types/IQueryAndPage';

// w redux
export const getRepos = (
  page: number,
  params : IQueryAndPage,
) => async (dispatch: AppDispatch) => {
  if (page) {
    dispatch(setLoading(true));
    const response = await getData(`/api/${page}`, { params });
    const a: PostsType = {};
    a[page] = response;
    dispatch(loadPosts(a));
  }
};
