import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTenants } from '../../redux/actions/TenantsAction';
import { makeStyles } from '@material-ui/core/styles';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core';
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

const TenantList = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { tenants, loading, error } = useSelector((state) => state.tenants);

  useEffect(() => {
    dispatch(fetchTenants());
  }, [dispatch]);

  return (
    <div className="tenant-list-container">
      <Paper className={classes.root}>
        {loading && <div>Loading tenants...</div>}
        {error && <div>Failed to load tenants: {error.message}</div>}
        {tenants && (
          <TableContainer>
            <Table className={classes.table}>
              <TableHead>
                <TableRow className={classes.tableHeader}>
                  <TableCell className={classes.tableHeaderText}>Tenant ID</TableCell>
                  <TableCell className={classes.tableHeaderText}>Tenant Name</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {tenants.map((tenant) => (
                  <TableRow key={tenant.id}>
                    <TableCell>{tenant.id}</TableCell>
                    <TableCell>{tenant.name}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </Paper>
    </div>
  );
};

export default TenantList;
