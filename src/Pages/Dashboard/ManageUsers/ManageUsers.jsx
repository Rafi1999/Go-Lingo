import React from 'react';
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import ManageClass from "../ManageClasses/ManageClass";
import { Link } from "react-router-dom";
import useUsers from "../../../hooks/useUsers";

const ManageUsers = () => {
    const [users, loading, refetch] = useUsers();


  return (
    <div className="p-5 ">
      <SectionTitle title="Manage Users" />
      <div className="p-5">
        <Link to="/dashboard/add_class" className="btn btn-sm bg-secondary text-[#fff]">Add CLass + </Link>
      </div>
      <div className="overflow-x-auto ">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Photo</th>
              <th>Name</th>
              <th>Email</th>
              <th>Gender</th>
              <th>Phone</th>
              <th>Address</th>
              <th>status</th>
            </tr>
          </thead>
          <tbody className="w-full">
            {
              users.map((Class, index) => <ManageClass refetch={refetch} Class={Class} index={index} key={index} />)
            }
            
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUsers;