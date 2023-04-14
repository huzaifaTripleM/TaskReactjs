import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContractors } from '../../redux/actions/contractorActions';
import "../../Styles/contractorList.css"

const ContractorList = ({ tenantId }) => {
  const dispatch = useDispatch();
  const { contractors, loading, error } = useSelector((state) => state.contractors);

  useEffect(() => {
    dispatch(fetchContractors(tenantId));
  }, [dispatch, tenantId]);

  return (
<div className="contractor-list-container">
  {loading && <p className="loading-message">Loading contractors...</p>}
  {error && <p className="error-message">Failed to load contractors</p>}
  {contractors && (
    <table className="contractor-table">
      <thead>
        <tr>
          <th>Contractor ID</th>
          <th>Contractor Name</th>
        </tr>
      </thead>
      <tbody>
        {contractors.map((contractor) => (
          <tr key={contractor.id} className="contractor-row">
            <td>{contractor.id}</td>
            <td>{contractor.name}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )}
</div>




  );
};

export default ContractorList;