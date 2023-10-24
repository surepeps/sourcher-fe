import React, { useState } from 'react';
import Step1 from '../components/expert_reg/Step1';
import Step2 from '../components/expert_reg/Step2';
import Step3 from '../components/expert_reg/Step3';
import Step4 from '../components/expert_reg/Step4';
import { useAuth } from '../../../context/AuthContext';
import { useRequestLoading } from '../../../context/LoadingContext';
import { useNavigate } from 'react-router-dom';

function ExpertStepsReg({ userData, config }) {
  const { expert_status } = userData;
  const [currentStep, setCurrentStep] = useState(expert_status - 1);

  const { setRequestLoading } = useRequestLoading();
  const { updateUserData } = useAuth();
  const navigate = useNavigate();

  const stepsData = [
    {
      name: 'Step 1',
      description: 'Upload Image',
    },
    {
      name: 'Step 2',
      description: 'Profession Info',
    },
    {
      name: 'Step 3',
      description: 'Add Links',
    },
    {
      name: 'Step 4',
      description: 'More Info',
    },
  ];

  // Move to next Step
  const moveToNext = async (expertStatus, nextStep) => {
    try {
      setRequestLoading(true);

      const userPData = {
        expert_status: expertStatus,
      };

      await updateUserData({ updatedUserData: userPData });

      // Redirect user to their profile page
      if (expertStatus === 0) {
        navigate(`/sh/${userData.username}`);
      }

      setCurrentStep(nextStep);
    } catch (error) {
      console.error(error);
    } finally {
      setRequestLoading(false);
    }
  };

  return (
    <div className="pt-6 font-notoSans">
      <div className="text-3xl xl:text-5xl font-semibold lg:text-left">
        Create Your Expert Profile
      </div>

      <div className="flex justify-between items-center my-10">
        {stepsData.map((step, index) => (
          <div
            key={step.name}
            className={`singleStep flex justify-center items-center flex-col relative ${
              index <= currentStep ? 'cursor-pointer' : ''
            } ${index === currentStep ? 'current-step' : ''}`}
            onClick={() => setCurrentStep(index)}
          >
            <div
              className={`top rounded-full py-0.5 px-2 text-sm flex justify-center items-center ${
                index <= currentStep
                  ? 'bg-awimLightPurple text-white'
                  : 'bg-awimGray80 text-awimLightPurple'
              }`}
            >
              {index + 1}
            </div>
            <div className={`text-center pt-3 ${index <= currentStep ? '' : 'text-awimGray80'}`}>
              <h4 className="text-sm font-semibold">{step.name}</h4>
              <p className="text-xs">{step.description}</p>
            </div>
            {index < stepsData.length - 1 && (
              <hr className="border-t hidden lg:block border-gray-300 w-20 mt-5 absolute top-3 left-20" />
            )}
          </div>
        ))}
      </div>

      <div className="ALLcontents">
        {currentStep === 0 && <Step1 userData={userData} config={config} setCurrentStep={setCurrentStep} />}
        {currentStep === 1 && <Step2 userData={userData} moveToNext={moveToNext} />}
        {currentStep === 2 && <Step3 userData={userData} moveToNext={moveToNext} />}
        {currentStep === 3 && <Step4 userData={userData} moveToNext={moveToNext} />}
      </div>

    </div>
  );
}

export default ExpertStepsReg;
