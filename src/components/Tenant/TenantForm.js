import {useForm} from 'react-hook-form';
import {useDispatch} from 'react-redux';
import {fetchTenants} from '../../redux/actions/TenantsAction';

const TenantForm = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    dispatch(fetchTenants(data));
    reset();
  };

  return (
    <div>
      <h2>Add Tenant</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" {...register("name", { required: true })} />
          {errors.name && <span className="error">This field is required</span>}
        </div>
        <button type="submit">Add Tenant</button>
      </form>
    </div>
  );
};

export default TenantForm;