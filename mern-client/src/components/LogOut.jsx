import React, { useContext } from 'react'
import { AuthContext } from '../../contexts/Authprovider'
import { useLocation, useNavigate } from 'react-router-dom';

const LogOut = () => {
    const {logout} = useContext(AuthContext)

    const location = useLocation();
    const nevigate = useNavigate();

    const from = location.state?.from?.pathname || '/'

    const handleLogout = () => {
        logout().then(() => {
            // Sign-out successful.
            alert("Logout Successfully");
            nevigate(from, { replace: true });

          }).catch((error) => {
            // An error happened.
          });
    }
  return (

    <div className='h-screen flex bg-teal-200 items-center justify-center'>
      <button className='bg-red-700 px-8 py-2 text-white rounded' onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default LogOut
