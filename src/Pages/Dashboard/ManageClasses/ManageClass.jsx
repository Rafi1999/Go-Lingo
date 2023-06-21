import React from 'react';

const ManageClass =({classitem}) => {
    const {name} = classitem;
    console.log("enter");
    // console.log(index);
    return (
        <tr className='w-full'>
        <td>
        </td>
        <td>
            {name}
        </td>
        <td>
            <img src={image} alt=""  className='rounded-full ww-12 h-12'/>
        </td>
        </tr>
    );
};

export default ManageClass;