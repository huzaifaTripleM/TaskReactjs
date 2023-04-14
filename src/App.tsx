import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ContractorList from './components/Contractor/ContractorList';
import ContractorForm from './components/Contractor/ContractorFrom';
import TenantList from './components/Tenant/TenantList';
import TenantForm from './components/Tenant/TenantForm';
import TenantSelect from './components/Tenant/TenantSelect';
import "./Styles/navbar.css"


function App() {
  const [tenantId, setTenantId] = useState(null);

  const handleTenantChange = (event:any) => {
    setTenantId(event.target.value);
  };

  return (
    <Router>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1 className="app-title">Contractor Management App</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3">
            <div className="sidebar">
              <ul className="nav flex-column">
                <li className="nav-item">
                  <Link to="/" className="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                  <Link to="/contractors/add" className="nav-link">Edit Contractor</Link>
                </li>
                <li className="nav-item">
                  <Link to="/tenants/add" className="nav-link">Add Tenant</Link>
                </li>
              </ul>
            </div>
          </div>
          </div>
          <div className="col-md-9">
            <Routes>
              <Route path="/" element={<><TenantSelect onChange={handleTenantChange} /><ContractorList tenantId={tenantId} /></>} />
              <Route path="/contractors/add" element={<ContractorForm tenantId={tenantId} />} />
              <Route path="/tenants" element={<TenantList />} />
              <Route path="/tenants/add" element={<TenantForm />} />
            </Routes>
          
        </div>
      </div>
    </Router>
  );
}

export default App;