import { useQuery } from '@tanstack/react-query'

const useHandleUser = ({params}) => {

    console.log(params.id);


    const { isLoading,  data: userAction = [] } = useQuery({
        queryKey: [{'_id': params?.id},{}],

        queryFn: async ()=>{
            const res = await fetch(`http://localhost:5000/users/${params.id}`)
            return res.json()
        }
      })


    return [userAction,isLoading]
};

export default useHandleUser;