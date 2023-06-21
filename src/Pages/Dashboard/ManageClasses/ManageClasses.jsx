
import { Link } from 'react-router-dom';

import Test from './Test';


const ManageClasses = () => {
    const classes = [
        {
            "name": "Class 1",
            "instructor_name": "John Smith",
            "instructor_email": "john.smith@example.com",
            "image": "https://media.istockphoto.com/id/1177608272/photo/high-school-students-raising-hands-on-a-class.jpg?s=612x612&w=0&k=20&c=QLOk2wZXKfVwwdYuTCvrwWRjrOW6K7-e2pWtYq-zYWc=",
            "available_seats": 30,
            "Price": 55
        },
        {
            "name": "Class 2",
            "instructorName": "Jane Doe",
            "instructorEmail": "jane.doe@example.com",
            "image": "https://www.a2nacademy.com/a2n_assets/img/become-instructor/become-a-instructor.png",
            "available_seats": 25,
            "Price": 60
        },
        {
            "name": "Class 3",
            "instructor_name": "Michael Johnson",
            "instructor_email": "michael.johnson@example.com",
            "image": "https://www.usnews.com/object/image/00000142-9263-d33c-abc6-ff77dfba0024/37985FE_DA_20130207_onlinemistakes-slide8.jpg?update-time=1421878595148&size=responsive640",
            "available_seats": 20,
            "Price": 50
        }
    ]
    
    return (
        <div>
            <h2 className='text-center text-3xl uppercase'>Manage Classes</h2>
            <Link to='/dashboard/addClass' className='btn btn-sm bg-sky-400 p-2 text-white text-xs mt-4'>Add Class</Link>
            <div className='overflow-x-auto'>
                <table className='table w-full'>
                    <thead>
                        <tr>
                            <td>#</td>
                            <td>Class Image</td>
                            <td>Class Name</td>
                            <td>Instructor Name</td>
                            <td>Instructor Email</td>
                            <td>Available Seats</td>
                            <td>Price</td>
                            <td>Status</td>
                        </tr>
                    </thead>
                    <tbody className='w-full'>
                       {
                        classes.map((Class,index)=><Test key={index} Class={Class} index={index}/>)
                       }
                    </tbody>
                </table>

            </div>
        </div>
    );
};

export default ManageClasses;