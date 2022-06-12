import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles({
  paginationBox: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-evenly',
    bottom: 0,
    height: '60px',
  },
  arrowButton: {
    fontWeight: 500,
    fontSize: 20,
    color: '#474955',
  },
  numberButtonsBox: {
    width: '80%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  numberButton: {
    borderRadius: '50%',
    fontSize: 18,
    fontWeight: 700,
    fontStyle: 'italic',
  },
});
