import { Helmet } from 'react-helmet';
import { FaBookReader, FaHistory, FaHome, FaUserCircle } from 'react-icons/fa';
import { Link, Outlet } from 'react-router-dom';
import { motion } from 'framer-motion';
import useSelect from '../hooks/useSelect';

const Dashboard = () => {
  const [selected] = useSelect();
  return (
    <>
      <Helmet>
        <title>Go-Lingo | Dashboard</title>
      </Helmet>
      <motion.div
        className="drawer lg:drawer-open"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
      >
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Page content here */}
          <Outlet></Outlet>
          <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">
            Open drawer
          </label>
        </div>
        <div className="drawer-side bg-amber-400">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 h-full text-base-content font-medium">
            {/* Sidebar content here */}
            <motion.li
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Link className='flex' to="/dashboard/mySelectedClass">
                <FaBookReader />
                My Selected Class
              <span className="badge badge-secondary">+{selected?.length || 0}</span>
              </Link>
              
            </motion.li>
            <motion.li
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Link to="/dashboard/myEnrolledClass">
                <FaUserCircle />
                My Enrolled Class
              </Link>
            </motion.li>
            <div className="divider"></div>
            <motion.li
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Link to="/">
                <FaHome />
                Home
              </Link>
            </motion.li>
            <motion.li
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Link to="/dashboard/payHistory">
                <FaHistory></FaHistory>
                Payment History
              </Link>
            </motion.li>
          </ul>
        </div>
      </motion.div>
    </>
  );
};

export default Dashboard;
