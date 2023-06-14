import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react';
import { authContext } from '../Shared/AuthProvider/AuthProvider';

const useHandleUser = () => {

    const {user} = useContext(authContext);



    const { isLoading,refetch,  data: userCollecton = [] } = useQuery({
        queryKey: ['users', user?.email],

        queryFn: async ()=>{
            const res = await fetch(`http://localhost:5000/users?email=${user?.email}`)
            return res.json()
        }
      })


    return [userCollecton,isLoading,refetch]
};

export default useHandleUser;