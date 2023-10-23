import React, { useState } from 'react';
import Step1 from '../components/expert_reg/Step1';
import Step2 from '../components/expert_reg/Step2';
import Step3 from '../components/expert_reg/Step3';
import Step4 from '../components/expert_reg/Step4';
 

function ExpertStepsReg({userData, config}) {
    const {expert_status} = userData
    const [currentStep, setCurrentStep] = useState(expert_status-1);

    const stepsData = [
        {
            name: 'Step 1',
            description: 'Upload Image',
            column: 'uploadImage',
            status: false,
        },
        {
            name: 'Step 2',
            description: 'Profession Info',
            column: 'professionInfo',
            status: false,
        },
        {
            name: 'Step 3',
            description: 'Add Links',
            column: 'addLinks',
            status: false,
        },
        {
            name: 'Step 4',
            description: 'More Info',
            column: 'moreInfo',
            status: false,
        }
    ];

    stepsData[currentStep].status = true;

    const handleNext = () => {
        if (currentStep < stepsData.length - 1) {
            setCurrentStep(currentStep + 1);
        }
    };

    const handlePrevious = () => {
        if (currentStep > 0) {
            setCurrentStep(currentStep - 1);
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
                            step.status ? 'cursor-pointer' : ''
                        } ${index === currentStep ? 'current-step' : ''}`}
                    >
                        <div
                            className={`top rounded-full py-0.5 px-2 text-sm flex justify-center items-center ${
                                step.status ? 'bg-awimLightPurple text-white' : 'bg-awimGray80 text-awimLightPurple'
                            }`}
                        >
                            {index + 1}
                        </div>
                        <div className={`text-center pt-3 ${step.status ? '' : 'text-awimGray80'}`}>
                            <h4 className="text-sm font-semibold">{step.name}</h4>
                            <p className="text-xs">{step.description}</p>
                        </div>
                        {index < stepsData.length - 1 && <hr className="border-t hidden lg:block border-gray-300 w-20 mt-5 absolute top-3 left-20" />} {/* Add the line */}
                    </div>
                ))}
            </div>

            <div className="ALLcontents">
                {/* Add content for the current step here */}

                {
                    currentStep === 0 && <div>
                        <Step1 userData={userData} config={config} setCurrentStep={setCurrentStep} />
                    </div>
                }

                {
                    currentStep === 1 && <div>
                        <Step2  userData={userData} config={config} setCurrentStep={setCurrentStep} />
                    </div>
                }

                {
                    currentStep === 2 && <div>
                        <Step3 />
                    </div>
                }

                {
                    currentStep === 3 && <div>
                       <Step4 />
                    </div>
                }
            </div>

            <div className="flex justify-between mt-5">
                <button onClick={handlePrevious} disabled={currentStep === 0}>
                    Previous
                </button>
                <button onClick={handleNext} disabled={currentStep === stepsData.length - 1}>
                    Next
                </button>
            </div>
        </div>
    );
}

export default ExpertStepsReg;
