import React from 'react';
import { useDispatch } from 'react-redux';
import { addContractor , updateContractor } from '../../redux/actions/contractorActions';
import TenantSelect from '../Tenant/TenantSelect';
import {useForm} from 'react-hook-form';
import "../../Styles/contractorForm.css";

const ContractorForm = ({ tenantId }) => {
  const dispatch = useDispatch();
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    const newContractor = {
      name: data.name, 
    };
    dispatch(updateContractor(data.id , newContractor));
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
       <div>
        <label>ID:</label>
        <input type="text" {...register('ID', { required: true })} />
      </div>
      <div>
        <label>Name:</label>
        <input type="text" {...register('name', { required: true })} />
      </div>
     
      {/* <TenantSelect onChange={handleTenantChange} /> */}
      <button type="submit">Edit Contractor</button>
    </form>
  );
};

export default ContractorForm;