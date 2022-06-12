import {
  Clear as ClearIcon,
  FilterAlt as FilterAltIcon,
} from '@mui/icons-material';
import {
  Box,
  Button,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Popover,
  Select,
  TextField,
} from '@mui/material/';
import React, { MouseEvent, useState } from 'react';

type Props = {
  col: string | undefined,
  fil: string | undefined,
  val: string | number | undefined,
  active: boolean,
  handleColumnChange: (event: { target: { value: string } }) => void,
  handleFilterChange: (event: { target: { value: string } }) => void,
  handleValueChange: (event: { target: { value: string | number } }) => void,
  handleSubmit: () => void
  handleClear: () => void
};

const arr = [{ value: 'in', sign: 'in' }];
const arr2 = [{ value: 'more', sign: '>' }, { value: 'less', sign: '<' }, { value: 'eq', sign: '=' }];

const FilterComponent: React.FC<Props> = ({
  col,
  fil,
  val,
  active,
  handleColumnChange,
  handleFilterChange,
  handleValueChange,
  handleSubmit,
  handleClear,
}) => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleApply = () => {
    handleSubmit();
    handleClose();
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <Box>
      <IconButton aria-describedby={id} onClick={handleClick} color={active ? 'success' : 'primary'} aria-label="filter" component="span">
        <FilterAltIcon />
      </IconButton>
      <IconButton disabled={!active} onClick={handleClear} color="primary" aria-label="clear filter" component="span">
        <ClearIcon />
      </IconButton>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <Box sx={{ minWidth: 120 }}>
          <FormControl sx={{ m: 1, width: '30%' }} fullWidth>
            <InputLabel id="select-label-Column">Column</InputLabel>
            <Select
              labelId="select-label-Column"
              id="select-Column"
              value={col}
              label="Column"
              onChange={handleColumnChange}
            >
              <MenuItem value="name">Name</MenuItem>
              <MenuItem value="amount">Amount</MenuItem>
              <MenuItem value="distance">Distance</MenuItem>
            </Select>
          </FormControl>
          <FormControl disabled={!col} sx={{ m: 1, width: '30%' }} fullWidth>
            <InputLabel id="select-label-Filter">Filter</InputLabel>
            <Select
              labelId="select-label-Filter"
              id="select-Filter"
              value={fil}
              label="Filter"
              onChange={handleFilterChange}
            >
              {col ? (col === 'name') ? (
                arr.map((item, i) => (
                  <MenuItem key={i} value={item.value}>
                    {item.sign}
                  </MenuItem>
                ))
              ) : (
                arr2.map((item, i) => (
                  <MenuItem key={i} value={item.value}>
                    {item.sign}
                  </MenuItem>
                ))
              ) : null}
            </Select>
          </FormControl>
          <FormControl sx={{ m: 1, width: '30%' }} fullWidth>
            <TextField
              id="outlined-Value"
              label="Value"
              value={val}
              type={['amount', 'distance'].indexOf(col!) !== -1 ? 'number' : 'text'}
              onChange={handleValueChange}
            />
          </FormControl>
          <Button sx={{ m: 1, width: '5%' }} disabled={!col || !fil || !val} onClick={handleApply}>Apply</Button>
          <Button color="error" sx={{ m: 1, width: '5%' }} disabled={!!col || !!fil || !!val} onClick={handleClose}>Close</Button>
        </Box>
      </Popover>
    </Box>
  );
};

export default FilterComponent;
