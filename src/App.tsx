import { Box, Grid, Typography } from '@mui/material';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ContractorList from './components/Contractor/ContractorList';
import ContractorForm from './components/Contractor/ContractorFrom';
import TenantList from './components/Tenant/TenantList';
import TenantForm from './components/Tenant/TenantForm';

import {FaList} from 'react-icons/fa'
import {FiEdit} from 'react-icons/fi'
import "../src/Styles/navbar.css"

function App() {



  return (
    <Router>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2} >
          <Grid item xs={12} style={{backgroundColor:'#3f51b5' , padding:'30px'}}>
            <Typography variant="h4" sx={{ textAlign: 'center', pt: 4 , color:'white' }}>
              Contractor Management App
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <Box sx={{ bgcolor: '#3f51b5', height: '100vh' }}>
              <ul className="nav flex-column" style={{ listStyle: 'none' , margin:'-17px'}}>
                <li className="nav-item">
                  <Link to="/" className="nav-link" style={{color:"white"}}> <FaList style={{position:'relative', marginRight:'10px'  }}/> Home</Link>
                </li>
                <li style={{marginBottom:'10px'}} >
                  <Link to="/contractors/add" className="nav-link"  style={{color:"white"}}> <FiEdit style={{position:'relative', marginRight:'10px'  }}/> Edit Contractor</Link>
                </li>
              
                <li className="nav-item">
                  <Link to="/tenants/Edit" className="nav-link" style={{color:"white"}}> <FaList style={{position:'relative', marginRight:'10px'  }}/>  Edit Tenant</Link>
                </li>
                <li className="nav-item">
                  <Link to="/tenants" className="nav-link" style={{color:"white"}}> <FiEdit style={{position:'relative', marginRight:'10px'  }}/> Tenant List</Link>
                </li>
              </ul>
            </Box>
          </Grid>
          <Grid item xs={9}>
            <Routes>
              <Route path="/" element={<ContractorList />}/>
              <Route path="/contractors/add" element={<ContractorForm />} />
              <Route path="/tenants" element={<TenantList />} />
              <Route path="/tenants/Edit" element={<TenantForm />} />
            </Routes>
          </Grid>
        </Grid>
      </Box>
    </Router>
  );
}

export default App;