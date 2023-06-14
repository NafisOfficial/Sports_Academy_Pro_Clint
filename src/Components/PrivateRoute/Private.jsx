import React from 'react';
import { useContext } from 'react';
import { authContext } from '../../Shared/AuthProvider/AuthProvider';
import { Navigate } from 'react-router-dom';

const Private = ({children}) => {


    const {user} = useContext(authContext);

    if(user){
        return children;
    }





    return <Navigate to='/login'></Navigate>
};

export default Private;