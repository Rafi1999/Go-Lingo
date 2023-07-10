
import { Helmet } from "react-helmet";
//import useUsers from "../../hooks/useUsers";
import { useEffect, useState } from "react";

const Instructors = () => {
    
    const [instructors, setInstructors] = useState([]);
    useEffect(()=> {
      fetch('http://localhost:5000/users/ins')
      .then(res => res.json())
      .then(info => setInstructors(info));
    }, []);
    //const [users] = useUsers();

    // Filter only the instructors from the users array
    // const instructors = users.filter(user => user.role === "instructor");

    return (
        <>
            <Helmet>
                <title>Go-Lingo | Instructors</title>
            </Helmet>
            <div>
                <h2 className='pt-32 text-center text-3xl uppercase py-4'>Instructors</h2>
                <div className='grid grid-cols-3 justify-center items-center gap-5 my-5'>
                    {
                        instructors.map((ins, index) => (
                            <div key={index} className="card w-96 h-80 bg-slate-200 shadow-xl mb-12">
  <figure className="px-10 pt-10">
    <img src={ins.picture} className="rounded-xl w-56 h-48 object-cover" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Name : {ins.name}</h2>
    <p>Email : {ins.email}</p>
    
  </div>
</div>
                        ))
                    }
                </div>
            </div>
        </>
    );
};

export default Instructors;
