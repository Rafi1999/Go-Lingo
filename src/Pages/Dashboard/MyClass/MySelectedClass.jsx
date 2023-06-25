import { Helmet } from "react-helmet";
import useSelect from "../../../hooks/useSelect";
import SelectedClass from "./SelectedClass";

const MySelectedClass = () => {
    const [selected,refetch] = useSelect();
    console.log(selected);
    const total = selected.reduce((sum,select)=>select.price + sum,0)
    return (
        <>
        <Helmet>
            <title>GoLingo || My Selected Class</title>
        </Helmet>
            <div className="uppercase flex gap-16 my-5">
            <h3 className="text-3xl">Total Class : {selected.length}</h3>
            
        </div>
        <div className="overflow-x-auto ">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Class Image</th>
              <th>Class name</th>
              <th>Price</th>
              <th>Options</th>
            </tr>
          </thead>
          <tbody className="w-full">
            {
              selected.map((Class, index) => <SelectedClass refetch={refetch} Class={Class} index={index} key={Class._id} />)
            }
            
          </tbody>
        </table>
      </div>
        </>
    );
};

export default MySelectedClass;