import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useAuth } from '../../../context/AuthContext';
import { useRequestLoading } from '../../../context/LoadingContext';
import { useState } from 'react';


function VerifyAccount() {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const token = queryParams.get('token');

  const [isVerifying, setIsVerifying] = useState(false);

  const { setRequestLoading } = useRequestLoading();
  const { VerifyAccount } = useAuth();

  useEffect(() => {
    const verifyAccount = async () => {
      if (!token || token === '') {
        navigate('/login');
        toast.error("Invalid token");
      }else{
        try {
          setRequestLoading(true)
          await VerifyAccount({token: token});
          setIsVerifying(true)
        } catch (error) {
          console.log(error);
        }finally{
          setRequestLoading(false)
        }
      }
    }

    verifyAccount();
  }, [navigate, token]);
  
  return (
    <div>
      {
        !isVerifying ? (

          <div className="text px-5 py-7">
            <p>Loading.......</p>
          </div>

        ) : (
          <div className="sh">

          </div>
        )
      }
    </div>
  )
}

export default VerifyAccount