import {useForm} from 'react-hook-form';
import {useDispatch} from 'react-redux';
import { updateTenants } from '../../redux/actions/TenantsAction';
import '../../Styles/form.css'
import { Button, TextField } from '@mui/material';
import { Grid } from '@material-ui/core';

const TenantForm = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    const newTenant = {
      name: data.name, 
    };
    dispatch(updateTenants(data.ID , newTenant));
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form-container">
      
  <Grid container direction={"column"} spacing={5}>
  <Grid item>
  <TextField label="ID" {...register('ID', { required: true })} sx={{ width: '100%' }}/>
  </Grid>
  <Grid item>
  <TextField label="Name" {...register('name', { required: true })}sx={{ width: '100%' }} />
  </Grid>
  <Grid item>
  <Button variant="contained" type="submit" sx={{ width: '100%' }}>Edit Tenant</Button>
  </Grid>

</Grid>


 

  </form>
  );
};

export default TenantForm;