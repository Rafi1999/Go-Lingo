import { FaAmazonPay, FaTrashAlt } from "react-icons/fa";

const SelectedClass = ({Class,index}) => {
    const {name,picture,price} = Class;
    return (
        <tr className='w-full'>
        <td>
        {index+1}
        </td>
        <td>
            <img src={picture} alt=""  className='rounded-full w-16 h-16'/>
        </td>
        <td>
            {name}
        </td>
        <td>
            ${price}
        </td>
        <td>
        <button className="text-white  btn btn-accent btn-md  rounded-full"><FaAmazonPay className="text-2xl"></FaAmazonPay></button>
        <button className="text-white btn  px-4 btn-error ml-2 btn-md rounded-full text-2xl"><FaTrashAlt></FaTrashAlt></button>

        </td>
        </tr>
    );
};

export default SelectedClass;