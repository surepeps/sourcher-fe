import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useAuth } from '../../../context/AuthContext';
import { useRequestLoading } from '../../../context/LoadingContext';


function VerifyAccount() {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const token = queryParams.get('token');

  const [isVerifying, setIsVerifying] = useState(false);
  const [verifyMessage, setVerifyMessage] = useState('');

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
          const resp = await VerifyAccount({token: token});
          setVerifyMessage(resp.message)
          setIsVerifying(true)
        } catch (error) {
          console.log(error);
          navigate('/')
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
          <div className="sh py-20">
            <h2 className='text-xl text-awimGreen text-center'>Congratulations! your account is Successfully verified</h2>
          </div>
        )
      }
    </div>
  )
}

export default VerifyAccount