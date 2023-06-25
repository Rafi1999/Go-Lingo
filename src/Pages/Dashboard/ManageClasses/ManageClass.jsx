

const ManageClass =({Class,index}) => {
    console.log(Class);
    const {name,picture} = Class;
    console.log("enter");
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
        </tr>
    );
};

export default ManageClass;