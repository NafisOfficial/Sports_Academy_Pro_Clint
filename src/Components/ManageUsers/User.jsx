
import { useQuery } from '@tanstack/react-query'
import { toast } from 'react-toastify';

const User = ({data}) => {


    const {_id,email,displayName,photoURL,action} = data ;

    const handleAdmin = (id) =>{
        fetch(`http://localhost:5000/users/admin/${id}`,{
            method: 'PATCH'
        })
        .then(res=>res.json())
        .then((data)=>{
            if(data.modifiedCount>0){
                toast.success("Admin")
            }
        })
    }
    
    const handleUser = (data) =>{

        const {id,action} = data;
        

        fetch(`http://localhost:5000/users/admin/${id}?action=${action}`,{
            method: 'PATCH'
        })
        .then(res=>res.json())
        .then((data)=>{
            if(data.modifiedCount>0){
                toast.success(`${action}`)
            }
        })
    }
    

    return (
            <tr>
                <td>
                    <div className="flex items-center space-x-3">
                        <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                                <img src={photoURL} alt={displayName} />
                            </div>
                        </div>
                        <div>
                            <div className="font-bold">{displayName}</div>
                        </div>
                    </div>
                </td>
                <td>
                    {email}
                </td>
                <td>
                    {action}
                </td>
                <td>
                    <button disabled={action==='instructor'?true:false} onClick={()=>handleUser({id:_id,action:'instructor'})}  className="btn btn-ghost btn-xs bg-[#2aa33d] text-white mr-2">Instructor</button>
                    <button disabled={action==='admin'?true:false} onClick={()=>handleUser({id:_id,action:'admin'})} className="btn btn-ghost btn-xs bg-[#1F882F] text-white">Admin</button>
                </td>
            </tr>
    );
};

export default User;