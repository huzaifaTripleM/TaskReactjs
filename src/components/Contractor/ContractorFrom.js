import React from 'react';
import { useDispatch } from 'react-redux';
import { addContractor } from '../../redux/actions/contractorActions';
import TenantSelect from '../Tenant/TenantSelect';
import {useForm} from 'react-hook-form';
import "../../Styles/contractorForm.css";

const ContractorForm = ({ tenantId }) => {
  const dispatch = useDispatch();
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    const newContractor = {
      name: data.name,
      email: data.email,
      phone: data.phone,
      selectedTenant: data.selectedTenant,
    };
    dispatch(addContractor(newContractor));
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Name:</label>
        <input type="text" {...register('name', { required: true })} />
      </div>
      <div>
        <label>Email:</label>
        <input type="email" {...register('email', { required: true })} />
      </div>
      <div>
        <label>Phone:</label>
        <input type="text" {...register('phone', { required: true })} />
      </div>
      {/* <TenantSelect onChange={handleTenantChange} /> */}
      <button type="submit">Add Contractor</button>
    </form>
  );
};

export default ContractorForm;