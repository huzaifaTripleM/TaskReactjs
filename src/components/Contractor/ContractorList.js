import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContractors } from '../../redux/actions/contractorActions';

const ContractorList = ({ tenantId }) => {
  const dispatch = useDispatch();
  const { contractors, loading, error } = useSelector((state) => state.contractors);

  useEffect(() => {
    dispatch(fetchContractors(tenantId));
  }, [dispatch, tenantId]);

  return (
    <div>
      {loading && <p>Loading contractors...</p>}
      {error && <p>Failed to load contractors</p>}
      {contractors && (
        <ul>
          {contractors.map((contractor) => (
            <li key={contractor.id}>{contractor.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ContractorList;