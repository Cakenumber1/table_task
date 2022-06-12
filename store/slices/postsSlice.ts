import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IPostType, IQueryPagePages } from 'types/';

import type { RootState } from '../store';

// Define a type for the slice state
type PostsState = {
  posts : PostsType,
  pages: number,
  currentPage: number,
  currentColumn?: string,
  currentFilter?: string,
  currentValue?: string | number,
  isLoading: boolean,
};

// Define the initial state using that type
const initialState: PostsState = {
  posts: {},
  pages: 0,
  currentPage: 0,
  currentColumn: '',
  currentFilter: '',
  currentValue: '',
  isLoading: true,
};

export type PostsType = { [page: number]: IPostType[]; };

export const postsSlice = createSlice({
  name: 'posts',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
      return state;
    },
    loadPosts: (state, action: PayloadAction<PostsType>) => {
      state.posts = { ...state.posts, ...action.payload };
      state.isLoading = false;
      return state;
    },
    clearPosts: (state) => {
      state.posts = {};
      return state;
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
      return state;
    },
    setAll: (state, action: PayloadAction<IQueryPagePages>) => {
      state.currentFilter = action.payload.filter;
      state.currentColumn = action.payload.column;
      state.currentValue = action.payload.value;
      state.currentPage = action.payload.page;
      if (action.payload.pages) state.pages = action.payload.pages;
      return state;
    },
  },
});

export const {
  setLoading,
  loadPosts,
  clearPosts,
  setPage,
  setAll,
} = postsSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectPosts = (state: RootState) => state.posts;

export default postsSlice.reducer;
