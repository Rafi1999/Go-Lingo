import { Link } from "react-router-dom";
import { FaLanguage, FaShoppingCart } from 'react-icons/fa';
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import ViewMode from "../ViewMode/ViewMode";
import useSelect from "../../../hooks/useSelect";
const Navbar = () => {
    const {user,logOut} = useContext(AuthContext);
    const [ selected ] = useSelect();
    const handleLogOut = () =>{
        logOut()
        .then(()=>{

        })
        .catch(err=>{console.log(err);})
    }
    const navOptions = <div className="flex items-center">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/instructors">Instructors</Link></li>
        <li><Link to="/classes">Classes</Link></li>
        <li><Link to="/dashboard/dashHome">Dashboard</Link></li>
        <li>
            <Link to='/'>
            <button className="btn gap-2 ">
  <FaShoppingCart></FaShoppingCart>
  <div className="badge badge-secondary">+{selected?.length || 0}</div>
</button>
            </Link>
        </li>
        {/* {
            isAdmin ? <li><Link to="/dashboard/adminhome">Dashboard</Link></li> : 
            <li><Link to="/dashboard/userhome">Dashboard</Link></li>
        } */}
        {/* <li>
            <Link to="/dashboard/mycart">
                <button className="btn gap-2">
                    <FaShoppingCart></FaShoppingCart>
                    <div className="badge badge-secondary">+{cart?.length || 0}</div>
                </button>
            </Link>
        </li> */}
        {/* {
            user ? <>
                <button onClick={handleLogOut} className="btn btn-ghost">LogOut</button>
            </> : <>
                <li><Link to="/login">Login</Link></li>
            </>
        } */}
    </div>
    return (
        <>
        <div className="navbar fixed z-10 bg-opacity-30 max-w-screen-xl bg-black text-white h-20">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navOptions}
                    </ul>
                </div>
                <a className="btn btn-ghost font-serif normal-case text-2xl"><FaLanguage></FaLanguage> Go-Lingo</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navOptions}
                </ul>
            </div>
            <div className="navbar-end">
                { user ? <>
                <img title={user.displayName} className="w-12 h-12 rounded-full mr-2" src={user.photoURL}></img>
                <Link onClick={handleLogOut} className="btn mr-4">LogOut</Link></> : <Link to='login' className="btn  mr-5">Login</Link>}
                <ViewMode></ViewMode>
            </div>
        </div>
    </>
    );
};

export default Navbar;