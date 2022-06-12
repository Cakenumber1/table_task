import {
  Box,
  CircularProgress,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import React from 'react';
import { IPostType } from 'types/';

import { useStyles } from './style';

type Props = {
  data: IPostType[] | null
  loading: boolean
};

const TableComponent: React.FC<Props> = ({
  data, loading,
}) => {
  const classes = useStyles();
  const posts = data;
  return (
    <TableContainer className={classes.tableContainer} component={Box}>
      <Table aria-label="table">
        <TableHead className={classes.tableHead}>
          <TableRow>
            <TableCell className={classes.headTableCell} align="center">
              date
            </TableCell>
            <TableCell className={classes.headTableCell} align="center">
              name
            </TableCell>
            <TableCell className={classes.headTableCell} align="center">
              amount
            </TableCell>
            <TableCell className={classes.headTableCell} align="center">
              distance
            </TableCell>
          </TableRow>
        </TableHead>
        {loading ? (
          <CircularProgress sx={{ width: '100%', height: '100%' }} />
        ) : (
          <TableBody>
            {posts && posts.length && posts!.map((post) => (
              <TableRow
                key={post.name + post.date}
              >
                <TableCell className={classes.tableCell}>{post.date}</TableCell>
                <TableCell className={classes.tableCell}>{post.name}</TableCell>
                <TableCell className={classes.tableCell}>{post.amount}</TableCell>
                <TableCell className={classes.tableCell}>{post.distance}</TableCell>
              </TableRow>
            ))}
            {(!posts || !posts.length) && <Box>No results</Box>}
          </TableBody>
        )}
      </Table>
    </TableContainer>
  );
};

export default TableComponent;
