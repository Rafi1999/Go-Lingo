
import { useEffect } from 'react';
import { useState } from 'react';

const usePopular = () => {
    const [loading, setLoading] = useState(true);
    const [classes, setClasses] = useState([]);
    useEffect(()=>{
        fetch('https://golingo-server.vercel.app/popular')
        .then(res=>res.json())
        .then(data=>{
            setClasses(data);
            setLoading(false);
        });
    },[])
    return [classes,loading]
};

export default usePopular;
