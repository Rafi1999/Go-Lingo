import { Helmet } from "react-helmet";

const Instructors = () => {
    const instructorz = [
        {
          name: "John Smith",
          email: "john.smith@example.com",
          image: "https://www.usnews.com/object/image/00000142-9263-d33c-abc6-ff77dfba0024/37985FE_DA_20130207_onlinemistakes-slide8.jpg?update-time=1421878595148&size=responsive640"
        },
        {
          name: "Jane Doe",
          email: "jane.doe@example.com",
          image: "https://t3.ftcdn.net/jpg/02/65/18/30/360_F_265183061_NkulfPZgRxbNg3rvYSNGGwi0iD7qbmOp.jpg"
        }
    ];

    return (
        <>
            <Helmet>
                <title>Go-Lingo | Instructors</title>
            </Helmet>
        <div>
            <h2 className='pt-32 text-center text-3xl uppercase py-4'>Instructors</h2>
            <div className='grid grid-cols-3 justify-center items-center gap-5 my-5'>
            {
                instructorz.map((ins, index) => (
                    <div key={index}>
                        <h2>{ins.name}</h2>
                        <h2>{ins.email}</h2>
                        <img src={ins.image} alt={ins.name} className='w-52 h-40' />
                    </div>
                ))
            }
            </div>
        </div>
        </>
    );
};

export default Instructors;
