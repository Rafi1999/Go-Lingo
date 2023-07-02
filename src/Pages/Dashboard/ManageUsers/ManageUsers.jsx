
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
//import ManageClass from "../ManageClasses/ManageClass";
//import { Link } from "react-router-dom";
import useUsers from "../../../hooks/useUsers";
//import ManageUser from './ManageUser';
import { Helmet } from "react-helmet";
import { FaChalkboardTeacher, FaTrashAlt, FaUserShield } from "react-icons/fa";

const ManageUsers = () => {
    const [users, refetch] = useUsers();

    const handleDelete = user =>{

    }

  return (
    <div className="p-5 ">
    <Helmet>
      <title>Go-Lingo | Manage Users</title>
    </Helmet>
      <SectionTitle title="Manage Users" />
      <div className="overflow-x-auto ">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Photo</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="w-full">
            {
              users.map((User, index) => 
              <tr key={User._id}>
              <td>{index+1}</td>
              <td><img src={User.picture} className="w-14 h-14 rounded-full" alt="" /></td>
              <td>{User.name}</td>
              <td>{User.email}</td>
              <td>
              <button onClick={() => handleDelete(User)} className=" btn btn-accent text-xl" ><FaUserShield></FaUserShield></button>
              <button onClick={() => handleDelete(User)} className=" btn ml-2 btn-info text-xl "><FaChalkboardTeacher></FaChalkboardTeacher></button>
              </td>
              <td>
              <button onClick={() => handleDelete(User)} className="text-white btn btn-error  rounded-full "><FaTrashAlt></FaTrashAlt></button>
              </td>
              </tr>)
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUsers;