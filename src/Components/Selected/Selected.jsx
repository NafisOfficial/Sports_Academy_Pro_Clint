import React from 'react';

const Selected = ({data}) => {


    const {class_name,instructor_name,instructor_email,instructor_image,price,status} = data





    return (
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
                    <button className="btn btn-ghost btn-xs">Pay</button>
                    <button className="btn btn-ghost btn-xs">Delete</button>
                </th>
            </tr>
    );
};

export default Selected;