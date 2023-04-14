import React from 'react';
import { useDispatch } from 'react-redux';
import { addContractor, updateContractor } from '../../redux/actions/contractorActions';
import TenantSelect from '../Tenant/TenantSelect';
import { useForm } from 'react-hook-form';
import { makeStyles } from '@material-ui/core/styles';
import {
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const ContractorForm = ({ tenantId }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    const newContractor = {
      name: data.name,
    };
    dispatch(updateContractor(data.id, newContractor));
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl className={classes.formControl}>
        <TextField
          id="id"
          label="ID"
          variant="outlined"
          margin="normal"
          {...register('id', { required: true })}
        />
      </FormControl>

      <FormControl className={classes.formControl}>
        <TextField
          id="name"
          label="Name"
          variant="outlined"
          margin="normal"
          {...register('name', { required: true })}
        />
      </FormControl>

      <Button type="submit" variant="contained" color="primary">
        Edit Contractor
      </Button>
    </form>
  );
};

export default ContractorForm;