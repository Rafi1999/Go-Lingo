import { useQuery } from '@tanstack/react-query';
import React from 'react';

const useClass = () => {
    const {data:classes = [],isLoading:loading,refetch} = useQuery({
        queryKey : ['menu'],
        queryFn :async()=>{
            const res = await fetch('http://localhost:5000/addClass')
            return res.json();
        }
    })
    return [classes,loading,refetch];
};

export default useClass;