import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useSelect from "../../hooks/useSelect";

const Class = ({ classItem }) => {
  const {name,picture,price, _id} = classItem;
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [,refetch] = useSelect();
  const handleAdd = classItem => {
    console.log(classItem);
    if (user && user.email) {
      const selectedClass = { selectedId: _id, name,picture,price, email : user.email}
      fetch('http://localhost:5000/selected', {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(selectedClass)
      })
        .then(res => res.json())
        .then(data => {
          if (data.insertedId) {
            refetch();
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Class Selected',
              showConfirmButton: false,
              timer: 1500
            })
          }
        })
    }
    else {
      Swal.fire({
        title: 'Please login to select',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Login now!'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            navigate('/login', { state: { from: location } })
          )
        }
      })
    }

  }
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-2xl my-2">
      <figure><img src={classItem.picture} className="h-80" alt="Shoes" /></figure>
      <div className="card-body ">
        <h2 className="card-title ">{classItem.name}</h2>
        <p className="font-sans font-medium">Instructor : {classItem.instructorName}</p>
        <div className="flex font-sans font-medium">
          <p>Available Seat: {classItem.availableSeats}</p>
          <p>Price : ${classItem.price}</p>
        </div>
        <div className="card-actions justify-end">
          <button onClick={() => handleAdd(classItem)} className="btn btn-outline border-0 btn-block border-t-2 border-b-2 border-t-orange-400 my-2 border-b-orange-400">Select</button>
        </div>
      </div>
    </div>
  );
};

export default Class;