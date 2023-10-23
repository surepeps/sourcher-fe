import React, { useState, useRef, useEffect } from 'react';
import Dropzone from 'react-dropzone';
import Cropper from 'react-cropper';
import 'cropperjs/dist/cropper.css';
import { useAuth } from '../../../context/AuthContext';
import ApiService from '../../../helpers/http/apiService';
import { useRequestLoading } from '../../../context/LoadingContext';
import { toast } from 'react-toastify';

function UploadAvatar({ previousImgWOURL, previousImage, closeModal }) {
  const [selectedFile, setSelectedFile] = useState(null);
  const [croppedImage, setCroppedImage] = useState(null);
  const [showCropSection, setShowCropSection] = useState(false);
  const [showCropButton, setShowCropButton] = useState(true);
  const [loading, setLoading] = useState(false);
  const cropperRef = useRef(null);

  const { setRequestLoading } = useRequestLoading();
  const api = new ApiService();
  const { fetchUserData } = useAuth();

  useEffect(() => {
    if (previousImage) {
      setLoading(true); // Show the loading spinner
      setTimeout(() => {
        setSelectedFile(`https:api.sourceher.com/v1/cdn?url=${previousImage}`);
        setShowCropSection(true);
        setLoading(false); // Hide the loading spinner
      }, 1000);
    }
  }, [previousImage]);

  const onDrop = (acceptedFiles) => {
    const file = acceptedFiles[0];
    setSelectedFile(file);
    setCroppedImage(null);
    setShowCropSection(true);
  };

  const handleCrop = () => {
    if (selectedFile && cropperRef.current) {
      const croppedCanvas = cropperRef.current.cropper.getCroppedCanvas();
      if (croppedCanvas) {
        croppedCanvas.toBlob((blob) => {
          const formattedImage = {
            name: selectedFile.name,
            size: blob.size,
            type: selectedFile.type,
            file: blob,
          };
          setCroppedImage(formattedImage);
          setShowCropSection(false);
          setShowCropButton(false);
        });
      }
    }
  };

  const handleReset = () => {
    setCroppedImage(null);
    setShowCropSection(true);
    setShowCropButton(true);
  };

  const handleRemoveImage = () => {
    setSelectedFile(null);
    setCroppedImage(null);
    setShowCropSection(false);
    setShowCropButton(true);
  };

  const handleUpload = async () => {
    if (croppedImage) {
      try {
        console.log(croppedImage);
        setRequestLoading(true);

        const formData = new FormData();
        formData.append('imageSrc', croppedImage.file, croppedImage.name);

        const resp = await api.putFormDataWithToken('/user/upload-avatar', formData);

        toast.success(resp.message);
        fetchUserData();
        closeModal();
      } catch (error) {
        console.error('Image upload failed', error);
      } finally {
        setRequestLoading(false);
      }
    }
  };

  const renderLoadingSpinner = () => (
    <div className="text-center">
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );

  const renderCropSection = () => (
    <div className="border border-gray-400 rounded-lg p-4">
      <Cropper
        ref={cropperRef}
        src={selectedFile instanceof Blob ? URL.createObjectURL(selectedFile) : selectedFile}
        aspectRatio={1}
        guides={true}
        className="w-full h-96 rounded-lg"
      />
    </div>
  );

  const renderCropButton = () => (
    <button
      onClick={handleCrop}
      className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-xl shadow-lg focus:outline-none focus:ring focus:ring-blue-300"
    >
      Crop Image
    </button>
  );

  const renderResetButton = () => (
    <button
      onClick={handleReset}
      className="mt-2 bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-xl shadow-lg focus:outline-none focus:ring focus:ring-red-300"
    >
      Reset
    </button>
  );

  const renderRemoveImageButton = () => (
    <button
      onClick={handleRemoveImage}
      className="mt-2 bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-xl ml-3 shadow-lg focus:outline-none focus:ring focus:ring-red-300"
    >
      Remove Image
    </button>
  );

  const renderUploadSection = () => (
    <div className="mt-6">
      <h2 className="text-xl mb-2">Cropped Image</h2>
      <img
        src={selectedFile instanceof Blob ? URL.createObjectURL(selectedFile) : selectedFile}
        alt="Cropped"
        className="max-w-xs mx-auto rounded-lg shadow-lg"
      />
      <button
        onClick={handleUpload}
        className="mt-4 bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-xl shadow-lg focus:outline-none focus:ring focus:ring-green-300"
      >
        Upload Image
      </button>
    </div>
  );

  return (
    <div className="container mx-auto mt-5">
      <h1 className="text-3xl mb-6 font-semibold text-center text-gray-800">
        Image Uploader
      </h1>
      {loading ? renderLoadingSpinner() : selectedFile ? (
        <div className="mt-6">
          <h2 className="text-xl mb-2">Crop Image</h2>
          {showCropSection && renderCropSection()}
          {showCropButton && renderCropButton()}
          {croppedImage && renderResetButton()}
          {renderRemoveImageButton()}
        </div>
      ) : (
        <Dropzone onDrop={onDrop} accept="image/*" multiple={false}>
          {({ getRootProps, getInputProps }) => (
            <div
              {...getRootProps()}
              className="border-dashed border-2 border-gray-400 p-6 text-center cursor-pointer rounded-lg"
            >
              <input {...getInputProps()} />
              <p className="text-gray-600">
                Drag &amp; drop an image here, or click to select one
              </p>
            </div>
          )}
        </Dropzone>
      )}
      {croppedImage && renderUploadSection()}
    </div>
  );
}

export default UploadAvatar;
