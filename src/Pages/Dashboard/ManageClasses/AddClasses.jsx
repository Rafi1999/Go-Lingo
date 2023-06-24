import { useForm } from "react-hook-form";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import axios from "axios";
import Swal from "sweetalert2";

const AddClass = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const add_class_url = "http://localhost:5000/add_class";

  const onSubmit = (data) => {
    data.status = "pending";
    console.log(data);
    
    axios.post(add_class_url, data, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        const data = response.data;
        if (data.insertedId) {
          Swal.fire("Good job!", "You clicked the button!", "success");
          // form.reset();
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    
  };

  return (
    <div className="px-5">
      <SectionTitle title="Add Class " />
      <div className="">
        <Link
          to="/dashboard/manageClasses"
          className="btn btn-sm bg-secondary text-[#fff]"
        >
          {" "}
          <FaArrowLeft />{" "}
        </Link>
      </div>
      <div className="max-w-md mx-auto h-auto flex flex-col justify-center py-20">
        <form className="shadow-md p-8" onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label htmlFor="className" className="text-sm font-medium">
              Class Name
            </label>
            <input
              type="text"
              id="className"
              className="w-full px-3 py-2 border rounded"
              {...register("name", { required: true })}
            />
            {errors.className && (
              <span className="text-red-500">Class Name is required</span>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="instructorName" className="text-sm font-medium">
              Instructor Name
            </label>
            <input
              type="text"
              id="instructorName"
              className="w-full px-3 py-2 border rounded"
              {...register("instructorName", { required: true })}
            />
            {errors.instructorName && (
              <span className="text-red-500">Instructor Name is required</span>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="instructorEmail" className="text-sm font-medium">
              Instructor Email
            </label>
            <input
              type="email"
              id="instructorEmail"
              className="w-full px-3 py-2 border rounded"
              {...register("instructorEmail", { required: true })}
            />
            {errors.instructorEmail && (
              <span className="text-red-500">Instructor Email is required</span>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="availableSeats" className="text-sm font-medium">
              Available Seats
            </label>
            <input
              type="number"
              id="availableSeats"
              className="w-full px-3 py-2 border rounded"
              {...register("availableSeats", { required: true })}
            />
            {errors.availableSeats && (
              <span className="text-red-500">Available Seats is required</span>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="price" className="text-sm font-medium">
              Price
            </label>
            <input
              type="number"
              id="price"
              className="w-full px-3 py-2 border rounded"
              {...register("price", { required: true })}
            />
            {errors.price && (
              <span className="text-red-500">Price is required</span>
            )}
          </div>

          <div className="mb-4 ">
            <label htmlFor="image" className="text-sm font-medium">
              Class Image
            </label>
            <input
              type="text"
              id="image"
              className="w-full px-3 py-2 border rounded"
              {...register("image")}
            />
          </div>

          <button type="submit" className="btn btn-primary w-full">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddClass;
