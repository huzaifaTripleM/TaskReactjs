import { useDispatch } from 'react-redux';
import { updateContractor } from '../../redux/actions/contractorActions';
import { useForm } from 'react-hook-form';
import { Button, TextField } from '@mui/material';
import "../../Styles/contractorForm.css";

const ContractorForm = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    const newContractor = {
      name: data.name, 
    };
    dispatch(updateContractor(data.ID , newContractor));
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField label="ID" {...register('ID', { required: true })} />
      <TextField label="Name" {...register('name', { required: true })} />
      <Button variant="contained" type="submit">Edit Contractor</Button>
    </form>
  );
};

export default ContractorForm;