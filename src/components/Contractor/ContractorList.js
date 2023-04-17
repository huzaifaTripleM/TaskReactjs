import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContractors } from '../../redux/actions/contractorActions';
import { fetchTenants } from '../../redux/actions/TenantsAction';
import { makeStyles } from '@material-ui/core/styles';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TablePagination } from '@material-ui/core';
import "../../Styles/contractorList.css";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#f5f5f5',
    padding: theme.spacing(2),
    borderRadius: 10,
  },
  table: {
    minWidth: 650,
  },
  tableHeader: {
    backgroundColor: theme.palette.primary.main,
  },
  tableHeaderText: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
}));

const ContractorList = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { contractors, loading, error } = useSelector((state) => state.contractors);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  useEffect(() => {
    dispatch(fetchContractors());
  }, [dispatch]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, contractors.length - page * rowsPerPage);

  return (
    <div className="contractor-list-container">
      <Paper className={classes.root}>
        {loading && <div>Loading contractors...</div>}
        {error && <div>Failed to load contractors: {error.message}</div>}
        {contractors && (
          <TableContainer>
            <Table className={classes.table}>
              <TableHead>
                <TableRow className={classes.tableHeader}>
                  <TableCell className={classes.tableHeaderText}>Contractor ID</TableCell>
                  <TableCell className={classes.tableHeaderText}>Contractor Name</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {(rowsPerPage > 0
                  ? contractors.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  : contractors
                ).map((contractor) => (
                  <TableRow key={contractor.id}>
                    <TableCell>{contractor.id}</TableCell>
                    <TableCell>{contractor.name}</TableCell>
                  </TableRow>
                ))}
                {emptyRows > 0 && (
                  <TableRow style={{ height: 53 * emptyRows }}>
                    <TableCell colSpan={2} />
                  </TableRow>
                )}
              </TableBody>
            </Table>
            <TablePagination
              rowsPerPageOptions={[5, 10]}
              component="div"
              count={contractors.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </TableContainer>
        )}
      </Paper>
    </div>
  );
};

export default ContractorList;