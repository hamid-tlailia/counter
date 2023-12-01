import React from 'react';
import { NavLink} from 'react-router-dom/cjs/react-router-dom.min';
import './style.css'
const Header = () => {
  return (
    
    <div>
  
      <div className=" d-flex  flex-row justify-content-around w-100 bg-dark p-3 align-items-center w-100">
<div className="logo">
  <NavLink to="/"><h2 className='text-warning'>Redux-Toolkit</h2></NavLink>
</div>
<div className="liens">
<NavLink to="/form" className="lien">Form</NavLink>
<NavLink to="/api" className="lien">API</NavLink>
<NavLink to="/counter" className="lien">Counter</NavLink>
</div>
      </div>
    </div>
  );
}

export default Header;

