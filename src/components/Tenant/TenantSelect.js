import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTenants } from '../../redux/actions/TenantsAction';

const TenantSelect = ({ onChange }) => {
  const dispatch = useDispatch();
  const { tenants, loading, error } = useSelector((state) => state.contractors);

  useEffect(() => {
    dispatch(fetchTenants());
  }, [dispatch]);

  const handleSelectChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <div>
      {loading && <p>Loading tenants...</p>}
      {error && <p>Failed to load tenants</p>}
      {console.log('here')}
      {tenants && (
        <select onChange={handleSelectChange}>
          <option value="">Select Tenant</option>
          {tenants.map((tenant) => (
            <option key={tenant.id} value={tenant.id}>
              {tenant.name}
            </option>
          ))}
        </select>
      )}
    </div>
  );
};

export default TenantSelect;