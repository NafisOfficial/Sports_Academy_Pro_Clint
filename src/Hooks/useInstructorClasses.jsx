import { useQuery } from '@tanstack/react-query';

import { useContext } from 'react';
;
import { authContext } from '../Shared/AuthProvider/AuthProvider';

const useInstructorClasses = () => {


    const {user} = useContext(authContext);



    const { isLoading,refetch,  data: instructorClass = [] } = useQuery({
        queryKey: ['Classes', user?.email],

        queryFn: async ()=>{
            const res = await fetch(`https://sports-server-nafisofficial.vercel.app/iclasses?email=${user?.email}`)
            return res.json()
        }
      })


    return [instructorClass,isLoading,refetch]

};

export default useInstructorClasses;