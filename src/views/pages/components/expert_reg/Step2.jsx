import React, { useState, useEffect } from 'react';
import ApiService from '../../../../helpers/http/apiService';
import { useRequestLoading } from '../../../../context/LoadingContext';
import { toast } from 'react-toastify';
import EditProfessional from './professions/EditProfession';
import SingleProfessional from './professions/SingleProfessional';
import SingleWorkExperience from './work_experience/SingleWorkExperience';
import EditWorkExperience from './work_experience/EditWorkExperience';
import { isValid, format, parseISO } from 'date-fns';



function Step2({ userData, config, setCurrentStep }) {
  const [editingAssociation, setEditingAssociation] = useState(null);
  const [editingWorkExperience, setEditingWorkExperience] = useState(null);

  const [allProfessions, setAllProfessions] = useState(null);
  const [allWorkExperiences, setAllWorkExperiences] = useState(null);

  const [showDeleteButton, setShowDeleteButton] = useState(false);
  const api = new ApiService();
  const { setRequestLoading } = useRequestLoading();

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

      setAllProfessions(professionalsData);
      setAllWorkExperiences(workExperiencesData);

    } catch (error) {
      console.error('Error fetching professionals and work experiences:', error);
    } finally {
      setRequestLoading(false);
    }
  }

  useEffect(() => {
    fetchAllData();
  }, []);

  // Add new Profession
  const addProfessionalAssociation = () => {
    if (editingAssociation) {
      toast.error('Finish editing the current profession before adding another one');
    } else {
      setEditingAssociation({ id: null });
      setShowDeleteButton(false);
    }
  }


  // Add New Work Experience
  const addWorkExperience = () => {
    if (editingWorkExperience) {
      toast.error('Finish editing the current work experience before adding another one');
    } else {
      setEditingWorkExperience({ id: null });
      setShowDeleteButton(false);
    }
  }
  

  // Delete Profession
  const deleteProfession = async (id, onCancel) => {
    try {
      setRequestLoading(true);
      await api.getWithToken(`/professional/delete/${id}`);
      toast.success('Professional deleted Successfully');
      fetchAllData();
      if (editingAssociation) onCancel();
    } catch (error) {
      console.error(error);
    } finally {
      setRequestLoading(false);
    }
  };

  // Delete Work Experience
  const deleteWorkExperience = async (id, onCancel) => {
    try {
      setRequestLoading(true);
      await api.getWithToken(`/workExperience/delete/${id}`);
      toast.success('Work Experience deleted Successfully');
      fetchAllData();
      if (editingWorkExperience) onCancel();
    } catch (error) {
      console.error(error);
    } finally {
      setRequestLoading(false);
    }
  };

  // Edit Profession
  const handleEditProfession = (profession) => {
    setEditingAssociation(profession);
    setShowDeleteButton(true);
  };

  // Edit Work Experience
  const handleEditWorkExperience = (workExperience) => {
    setEditingWorkExperience(workExperience);
    setShowDeleteButton(true);
  };

  return (
    <div className="px-2">


      <div className="AllProfessions mb-10">

        <div className="ContTitle">
          <h4 className="font-bold text-md">Professionals</h4>
        </div>

        <div className="ShowProfessions my-6">
          {allProfessions ? (
            allProfessions.map((profession) => (
              <SingleProfessional
                key={profession.id}
                profession={profession}
                onEditProfession={handleEditProfession}
                deleteProfession={() => deleteProfession(profession.id)}
                disabled={editingAssociation === profession}
              />
            ))
          ) : (
            <p className="text-center">Loading professions...</p>
          )}
        </div>

        {editingAssociation && (
          <EditProfessional
            association={editingAssociation}
            onCancel={() => setEditingAssociation(null)}
            deleteProfession={() => deleteProfession(editingAssociation.id)}
            showDeleteButton={showDeleteButton}
            fetchAllData={fetchAllData}
          />
        )}

        <div className="addProfessionals">
          <button
            type="button"
            className="text-awimGreen text-sm flex gap-2 mt-5 font-semibold items-center"
            onClick={addProfessionalAssociation}
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.9987 1.83331C5.94786 1.83331 1.83203 5.94915 1.83203 11C1.83203 16.0508 5.94786 20.1666 10.9987 20.1666C16.0495 20.1666 20.1654 16.0508 20.1654 11C20.1654 5.94915 16.0495 1.83331 10.9987 1.83331ZM14.6654 11.6875H11.6862V14.6666C11.6862 15.0425 11.3745 15.3541 10.9987 15.3541C10.6229 15.3541 10.3112 15.0425 10.3112 14.6666V11.6875H7.33203C6.9562 11.6875 6.64453 11.3758 6.64453 11C6.64453 10.6241 6.9562 10.3125 7.33203 10.3125H10.3112V7.33331C10.3112 6.95748 10.6229 6.64581 10.9987 6.64581C11.3745 6.64581 11.6862 6.95748 11.6862 7.33331V10.3125H14.6654C15.0412 10.3125 15.3529 10.6241 15.3529 11C15.3529 11.3758 15.0412 11.6875 14.6654 11.6875Z"
                fill="#004C3F"
              ></path>
            </svg>
            Add Another Professional Association
          </button>
        </div>
      </div>

      {/* Work Experience */}
      <div className="AllWorkExperience mb-10">
        <div className="ContTitle">
          <h4 className="font-bold text-md">Work Experiences</h4>
        </div>

        <div className="ShowWorkExperience my-6">
          {allWorkExperiences ? (
            allWorkExperiences.map((workexperience) => (
              <SingleWorkExperience
                key={workexperience.id}
                experience={workexperience}
                onEditWorkExperience={handleEditWorkExperience}
                deleteWorkExperience={() => deleteWorkExperience(workexperience.id)}
                disabled={editingWorkExperience === workexperience}
              />
            ))
          ) : (
            <p className="text-center">Loading Work Experience...</p>
          )}
        </div>

        {editingWorkExperience && (
          <EditWorkExperience
            experience={editingWorkExperience}
            onCancel={() => setEditingWorkExperience(null)}
            deleteWorkExperience={() => deleteWorkExperience(editingWorkExperience.id)}
            showDeleteButton={showDeleteButton}
            fetchAllData={fetchAllData}
          />
        )}


        <div className="addWorkExperiences">
          <button
            type="button"
            className="text-awimGreen text-sm flex gap-2 mt-5 font-semibold items-center"
            onClick={addWorkExperience}
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.9987 1.83331C5.94786 1.83331 1.83203 5.94915 1.83203 11C1.83203 16.0508 5.94786 20.1666 10.9987 20.1666C16.0495 20.1666 20.1654 16.0508 20.1654 11C20.1654 5.94915 16.0495 1.83331 10.9987 1.83331ZM14.6654 11.6875H11.6862V14.6666C11.6862 15.0425 11.3745 15.3541 10.9987 15.3541C10.6229 15.3541 10.3112 15.0425 10.3112 14.6666V11.6875H7.33203C6.9562 11.6875 6.64453 11.3758 6.64453 11C6.64453 10.6241 6.9562 10.3125 7.33203 10.3125H10.3112V7.33331C10.3112 6.95748 10.6229 6.64581 10.9987 6.64581C11.3745 6.64581 11.6862 6.95748 11.6862 7.33331V10.3125H14.6654C15.0412 10.3125 15.3529 10.6241 15.3529 11C15.3529 11.3758 15.0412 11.6875 14.6654 11.6875Z"
                fill="#004C3F"
              ></path>
            </svg>
            Add Another Work Experience
          </button>
        </div>

      </div>


    </div>
  );
}

export default Step2;
