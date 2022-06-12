import {
  Box,
} from '@mui/material';
import FilterComponent from 'components/FilterComponent';
import PaginationComponent from 'components/PaginationComponent';
import TableComponent from 'components/TableComponent';
import { getRepos } from 'helpers/handleLoad';
import { updateAll } from 'helpers/updateAll';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  clearPosts,
  setPage,
} from 'store/slices/postsSlice';
import { RootState } from 'store/store';

const Home: NextPage = () => {
  const dispatch = useDispatch();

  const page = useSelector((state: RootState) => state.posts.currentPage);
  const pages = useSelector((state: RootState) => state.posts.pages);
  const data = useSelector((state: RootState) => state.posts.posts);
  const column = useSelector((state: RootState) => state.posts.currentColumn);
  const filter = useSelector((state: RootState) => state.posts.currentFilter);
  const value = useSelector((state: RootState) => state.posts.currentValue);
  const loading = useSelector((state: RootState) => state.posts.isLoading);

  const router = useRouter();

  // Queries onload
  const pageQuery = router.query.page ? Number(router.query.page) : 1;
  const colQuery = router.query.col ? String(router.query.col) : undefined;
  const filterQuery = router.query.filter ? String(router.query.filter) : undefined;
  const valueQuery = router.query.value ? String(router.query.value) : undefined;

  // Filters
  const [col, setCol] = useState<string>();
  const [fil, setFil] = useState<string>();
  const [val, setVal] = useState<string | number>();

  // page refresh
  useEffect(() => {
    updateAll(dispatch, pageQuery, colQuery, filterQuery, valueQuery);
  }, [pageQuery, colQuery, filterQuery, valueQuery]);

  // load page or get from redux
  useEffect(() => {
    if (!data[page]) {
      dispatch(getRepos(page, {
        page, column, filter, value,
      }));
    }
  }, [page]);

  // change sort
  useEffect(() => {
    dispatch(getRepos(page, {
      page, column, filter, value,
    }));
  }, [column, filter, value]);

  // upd page
  const handlePage = (pageNew: number) => {
    if (!column || !filter || !value) {
      window.history.pushState(null, '', `/?page=${pageNew}`);
    } else {
      window.history.pushState(null, '', `/?page=${pageNew}&col=${column}&filter=${filter}&value=${value}`);
    }
    dispatch(setPage(pageNew));
  };
  const handleClear = () => {
    dispatch(clearPosts());
    updateAll(dispatch);
    window.history.pushState(null, '', `/?page=${1}`);
  };

  // filter handlers
  const handleColumnChange = (event: { target: { value: string } }) => {
    setCol(event.target.value);
  };
  const handleFilterChange = (event: { target: { value: string } }) => {
    setFil(event.target.value);
  };
  const handleValueChange = (event: { target: { value: string | number } }) => {
    setVal(event.target.value);
  };

  const handleSubmit = () => {
    dispatch(clearPosts());
    updateAll(dispatch, 1, col, fil, val);
    window.history.pushState(null, '', `/?page=${1}&col=${col}&filter=${fil}&value=${val}`);
  };

  return (
    <Box sx={{
      width: '100%',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-between',
    }}
    >
      <FilterComponent
        col={col}
        fil={fil}
        val={val}
        active={!!column || !!filter || !!value}
        handleColumnChange={handleColumnChange}
        handleFilterChange={handleFilterChange}
        handleValueChange={handleValueChange}
        handleSubmit={handleSubmit}
        handleClear={handleClear}
      />
      <TableComponent
        data={data[page]}
        loading={loading}
      />
      <PaginationComponent
        page={page}
        pages={pages}
        handlePage={handlePage}
      />
    </Box>
  );
};

export default Home;
