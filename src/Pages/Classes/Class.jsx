import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const Class = ({classItem}) => {
    const {user} = useContext(AuthContext);
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img src={classItem.picture} className="h-80" alt="Shoes" /></figure>
  <div className="card-body ">
    <h2 className="card-title ">{classItem.name}</h2>
    <p className="font-sans font-medium">Instructor : {classItem.instructorName}</p>
    <div className="flex font-sans font-medium">
        <p>Available Seat: {classItem.availableSeats}</p>
        <p>Price : ${classItem.price}</p>
    </div>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Select</button>
    </div>
  </div>
</div>
    );
};

export default Class;