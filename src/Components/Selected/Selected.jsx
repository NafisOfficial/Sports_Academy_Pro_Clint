import { toast } from 'react-toastify';

const Selected = ({ data }) => {


    const { _id, class_name, instructor_name, instructor_email, instructor_image, price, status } = data


    const handleDelete = (_id) => {

    fetch(`http://localhost:5000/userBooked/${_id}`,{
        method: 'DELETE',

    })
            .then(res => res.json())
            .then(data => {
                if (data?.deletedCount > 0) {
                    toast.success("Deleted");
                }

            })


    }



    return (
       <>
        <tr>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={instructor_image} alt={instructor_name} />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">Name: {instructor_name}</div>
                        <div className="text-sm opacity-50">email:{instructor_email}</div>
                    </div>
                </div>
            </td>
            <td>
                {class_name}
                <br />
                <span className="badge badge-ghost badge-sm text-red-500">{status}</span>
            </td>
            <td>{price} $</td>
            <th>
                <button disabled={status === 'paid' ? true : false} className="btn btn-ghost btn-xs">Pay</button>
                <button onClick={() => handleDelete(_id)} className="btn btn-ghost btn-xs">Delete</button>
            </th>
        </tr>
       
       </>
    );
};

export default Selected;