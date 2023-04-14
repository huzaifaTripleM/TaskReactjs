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
      <div className="contractor-list">
        {contractors.map((contractor) => (
          <li key={contractor.id} className="contractor-item">
            {contractor.name}
          </li>
        ))}
      </div>
    )}
  </div>
  );
};

export default ContractorList;