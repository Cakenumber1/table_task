import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles({
  tableContainer: {
    width: '100%',
    overflowY: 'hidden',
  },
  tableHead: {
    background: '#474955',
  },
  headTableCell: {
    width: '25%',
    whiteSpace: 'nowrap',
    color: 'white',
    fontSize: '14px',
    fontWeight: 600,
    border: '1px solid rgba(224, 224, 224, 1)',
  },
  tableRow: {
    height: '68px',
  },
  tableCell: {
    width: '25%',
    border: '1px solid rgba(224, 224, 224, 1)',
    textAlign: 'center',
    color: '#474955',
    fontSize: '13px',
    fontWeight: 500,
  },
});
