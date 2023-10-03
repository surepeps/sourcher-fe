import React,  {useState, useEffect} from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import UpgradeForm from '../others/UpgradeForm';
import NoProfessional from '../others/NoProfessional';
import ApiService from '../../../../helpers/http/apiService';
import { useRequestLoading } from '../../../../context/LoadingContext';
import ProfessionalSection from '../others/ProfessionalSection';
import WorkExperienceSection from '../others/WorkExperienceSection';
import { isValid, format, parseISO } from 'date-fns';
import { toast } from 'react-toastify';



const validationSchema = Yup.object().shape({
  professional: Yup.array().of(
    Yup.object().shape({
      professional_description: Yup.string(),
      professional_role: Yup.string().required('Title is required'),
      duration: Yup.string().required('Duration is required'),
    })
  ),
  workExperience: Yup.array().of(
    Yup.object().shape({
      job_title: Yup.string().required('Title is required'),
      company_name: Yup.string().required('Company name is required'),
      start_date: Yup.string().required('Start date is required'),
      end_date: Yup.date().when('still_work_there', (stillWorkThere, schema) => {
        return stillWorkThere
          ? schema.nullable()
          : schema.required('End date is required if not still working there');
      }),
      still_work_there: Yup.boolean(),
      job_description: Yup.string().required('Job Description is required'),
    })
    .test('validate-end-date', 'End date is required if not still working there', function (value) {
      if (!this.parent.still_work_there && !value) {
        return this.createError({
          message: 'End date is required if not still working there',
          path: 'end_date',
        });
      }
      return true;
    })
  ),
});


function ProfessionalProfile({allData}) {
  const {config, isProfileLevel1, isMyAccount} = allData;
  const [isAllow, setIsAllow] = useState(false);

  const { setRequestLoading } = useRequestLoading();

  const api = new ApiService();

  const allowToAddProfessions = () => {
    setIsAllow(true);
  }
  
  const [endDateDisabled, setEndDateDisabled] = useState(false);

  const [buttonClicked, setButtonClicked] = useState({
    workExperience: false,
    professional: false,
  });

  const fetchAllData = async () => {
    try {
      setRequestLoading(true);

      const [professionalsResponse, workExperiencesResponse] = await Promise.all([
        api.getWithToken('/professional/getAll'),
        api.getWithToken('/workExperience/getAll'),
      ]);

      const [professionalsData, workExperiencesData] = await Promise.all([
        professionalsResponse.data,
        workExperiencesResponse.data,
      ]);

      workExperiencesData.forEach((exp) => {
        if (exp.start_date) {
          exp.start_date = parseISO(exp.start_date);
        }

        if (exp.still_work_there) {
          exp.end_date = '';
        } else if (exp.end_date) {
          exp.end_date = parseISO(exp.end_date);
        }

        // Convert still_work_there to boolean
        exp.still_work_there = exp.still_work_there === "1";

      });
      

      formik.setFieldValue('professional', professionalsData);
      formik.setFieldValue('workExperience', workExperiencesData);

      if (professionalsData.length > 0 || professionalsData.length > 0) {
        setIsAllow(true);
      }

      setRequestLoading(false);
    } catch (error) {
      console.error('Error fetching professionals and work experiences:', error);
      setRequestLoading(false);
    }
  };

  const formik = useFormik({
    initialValues: {
      professional: [],
      workExperience: [],
    },
    validationSchema,
    onSubmit: async (values) => {
      const professionalsForm = values.professional;
      const workExperiencesForm = values.workExperience;

      try {
        setRequestLoading(true);
        await Promise.all([
          api.postWithToken('/professional/add', { professionals: professionalsForm }),
          api.postWithToken('/workExperience/add', { workExperiences: workExperiencesForm }),
        ]);
        fetchAllData();
        toast.success(`Professional Profile updated Successfully`)
      } catch (error) {
        console.error('Error:', error);
      } finally {
        setRequestLoading(false);
      }
    },
  });

  useEffect(() => {
    fetchAllData();
  }, []);


  const handleStillWorkingChange = (index) => {
    const updatedWorkExperience = [...formik.values.workExperience];
    updatedWorkExperience[index].still_work_there = !updatedWorkExperience[index].still_work_there;
    // Update the disabled state for this specific row
    updatedWorkExperience[index].end_date = updatedWorkExperience[index].still_work_there ? '' : updatedWorkExperience[index].end_date;
    formik.setFieldValue('workExperience', updatedWorkExperience);
  };


  const addSection = (sectionType) => {
    formik.setFieldValue(sectionType, [
      ...formik.values[sectionType],
      sectionType === 'professional'
        ? { 
          id: null, 
          professional_description: '', 
          professional_role: '', 
          duration: '' 
        }
        : {
            id: null,
            job_title: '',
            company_name: '',
            start_date: '',
            end_date: '',
            still_work_there: false,
            job_description: '',
          },
    ]);

    setButtonClicked((prevState) => ({
      ...prevState,
      [sectionType]: true,
    }));
  };

  const removeSection = async (index, sectionType) => {
    const itemToDelete = formik.values[sectionType][index];

    if (itemToDelete.id) {
      try {
        setRequestLoading(true);
        await api.getWithToken(`/${sectionType}/delete/${itemToDelete.id}`);
        toast.success(`${sectionType} deleted Successfully`)
      } catch (error) {
        console.error(error);
        return;
      } finally {
        setRequestLoading(false);
      }
    }

    const updatedSection = [...formik.values[sectionType]];
    updatedSection.splice(index, 1);
    formik.setFieldValue(sectionType, updatedSection);
  };
  
  return (
    <div className='font-notoSans'>

      {/* Upgrade to level Two */}
      { isMyAccount && isProfileLevel1 ? <UpgradeForm /> : ''}

      { !isAllow ? <NoProfessional config={config} allowToAddProfessions={allowToAddProfessions} /> : 
        (
          <div className="mt-10">
            <form onSubmit={formik.handleSubmit}>
              {/* Professional Sections */}
              <div>
                {formik.values.professional.map((prof, index) => (
                  <ProfessionalSection
                    key={index}
                    formik={formik}
                    index={index}
                    removeSection={() => removeSection(index, 'professional')}
                  />
                ))}
                {/* Button to Add Professional Section */}
                <button onClick={() => addSection('professional')} className='text-awimGreen text-sm flex gap-2 mt-5 font-semibold items-center'> 
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.9987 1.83331C5.94786 1.83331 1.83203 5.94915 1.83203 11C1.83203 16.0508 5.94786 20.1666 10.9987 20.1666C16.0495 20.1666 20.1654 16.0508 20.1654 11C20.1654 5.94915 16.0495 1.83331 10.9987 1.83331ZM14.6654 11.6875H11.6862V14.6666C11.6862 15.0425 11.3745 15.3541 10.9987 15.3541C10.6229 15.3541 10.3112 15.0425 10.3112 14.6666V11.6875H7.33203C6.9562 11.6875 6.64453 11.3758 6.64453 11C6.64453 10.6241 6.9562 10.3125 7.33203 10.3125H10.3112V7.33331C10.3112 6.95748 10.6229 6.64581 10.9987 6.64581C11.3745 6.64581 11.6862 6.95748 11.6862 7.33331V10.3125H14.6654C15.0412 10.3125 15.3529 10.6241 15.3529 11C15.3529 11.3758 15.0412 11.6875 14.6654 11.6875Z" fill="#004C3F"/>
                  </svg>
                  Add Another Professional Association
                </button>
              </div>

              <div className="line my-10 w-full bg-[#0F172A13] h-0.5 rounded-xl"></div>

              {/* Work Experience Sections */}
              <div>
                {formik.values.workExperience.map((exp, index) => (
                  <WorkExperienceSection
                    key={index}
                    formik={formik}
                    index={index}
                    endDateDisabled={endDateDisabled}
                    handleStillWorkingChange={() => handleStillWorkingChange(index)}
                    removeSection={() => removeSection(index, 'workExperience')}
                  />
                ))}
                {/* Button to Add Work Experience Section */}
                <button onClick={() => addSection('workExperience')} className='text-awimGreen text-sm flex gap-2 mt-5 font-semibold items-center'> 
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.9987 1.83331C5.94786 1.83331 1.83203 5.94915 1.83203 11C1.83203 16.0508 5.94786 20.1666 10.9987 20.1666C16.0495 20.1666 20.1654 16.0508 20.1654 11C20.1654 5.94915 16.0495 1.83331 10.9987 1.83331ZM14.6654 11.6875H11.6862V14.6666C11.6862 15.0425 11.3745 15.3541 10.9987 15.3541C10.6229 15.3541 10.3112 15.0425 10.3112 14.6666V11.6875H7.33203C6.9562 11.6875 6.64453 11.3758 6.64453 11C6.64453 10.6241 6.9562 10.3125 7.33203 10.3125H10.3112V7.33331C10.3112 6.95748 10.6229 6.64581 10.9987 6.64581C11.3745 6.64581 11.6862 6.95748 11.6862 7.33331V10.3125H14.6654C15.0412 10.3125 15.3529 10.6241 15.3529 11C15.3529 11.3758 15.0412 11.6875 14.6654 11.6875Z" fill="#004C3F"/>
                  </svg>
                  Add Another Work Experience
                </button>
              </div>

              { (buttonClicked.workExperience || buttonClicked.professional) &&
                <button
                  type="submit"
                  className='bg-awimGreen text-white py-3 px-10 rounded-lg text-sm border border-awimGreen font-semibold hover:bg-opacity-90 transition duration-300 ease-in-out mt-8'
                >
                  Submit
                </button>
              }

            </form>
          </div>
        )
      }
      

    </div>
  )
}

export default ProfessionalProfile