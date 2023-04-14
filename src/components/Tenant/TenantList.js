import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTenants } from '../../redux/actions/TenantsAction';

const TenantList = () => {
  const dispatch = useDispatch();
  const tenants = useSelector((state) => state.tenants.tenants);

  useEffect(() => {
    dispatch(fetchTenants());
  }, [dispatch]);

  useEffect(()=>{
    console.log('wew',tenants)
  },[tenants])

  return (
    <div>

      <h2>Tenant List</h2>
      {tenants && tenants.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Created At</th>
            </tr>
          </thead>
          <tbody>
            {tenants.map((tenant) => (
              <tr key={tenant.id}>
                <td>{tenant.id}</td>
                <td>{tenant.name}</td>
                <td>{tenant.created_at}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No tenants to show.</p>
      )}
    </div>
  );
};

export default TenantList;
