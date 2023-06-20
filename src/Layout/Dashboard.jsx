import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className="drawer lg:drawer-open">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col items-center justify-center">
    {/* Page content here */}
    <Outlet></Outlet>
    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
  
  </div> 
  <div className="drawer-side bg-amber-400">
    <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 h-full text-base-content font-medium">
      {/* Sidebar content here */}
      <li><Link to='/dashboard/manageClasses'>Manage Classes</Link></li>
      <li><Link to='/dashboard/manageUsers'>Manage Users</Link></li>
      <div className='divider'></div>
      <li><Link to='/'>Home</Link></li> 
      
    </ul>
  
  </div>
</div>
    );
};

export default Dashboard;