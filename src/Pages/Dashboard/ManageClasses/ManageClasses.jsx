import React from "react";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import ManageClass from "./ManageClass";
import { Link } from "react-router-dom";
import useClass from "../../../hooks/useClass";


const ManageClasses = () => {
  const [classes, refetch] = useClass();
  return (
    <div className="p-5 ">
      <SectionTitle title="Manage Classes" />
      <div className="p-5">
        <Link to="/dashboard/addClass" className="btn btn-sm bg-secondary text-[#fff]">Add CLass + </Link>
      </div>
      <div className="overflow-x-auto ">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Class Image</th>
              <th>Class name</th>
              <th>Instructor name</th>
              <th>Instructor email</th>
              <th>Available seats</th>
              <th>Price</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody className="w-full">
            {
              classes.map((Class, index) => <ManageClass refetch={refetch} Class={Class} index={index} key={index} />)
            }
            
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageClasses;
