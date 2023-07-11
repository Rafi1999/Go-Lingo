

const ManageClass =({Class,index}) => {    
    const {name,picture,instructorName,instructorEmail,available_seats,price,status} = Class;
    // console.log(index);
    return (
        <tr className='w-full'>
        <td>
        {index+1}
        </td>
        <td>
            <img src={picture} alt=""  className='rounded-full w-14 h-12'/>
        </td>
        <td>
            {name}
        </td>
        <td>
            {instructorName}
        </td>
        <td>
            {instructorEmail}
        </td>
        <td>
            {available_seats}
        </td>
        <td>
            {price}
        </td>
        <td>
            {status}
        </td>
        </tr>
    );
};

export default ManageClass;