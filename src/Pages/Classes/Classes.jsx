import { Helmet } from 'react-helmet';
import useClass from '../../hooks/useClass';
import Class from './Class';

const Classes = () => {
    const [classes] = useClass();
    return (
        <>
        <Helmet>
                <title>Go-Lingo | Classes</title>
            </Helmet>
        <div>
            <h2 className='pt-32 text-center text-3xl uppercase py-4'>Classes</h2>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
                {classes.map((classItem) => (
                    <Class key={classItem._id} classItem={classItem}/>
                ))}
            </div>
        </div>
        </>
        
    );
};

export default Classes;