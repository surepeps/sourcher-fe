import React, { useState, useRef, useEffect } from 'react';
import Dropzone from 'react-dropzone';
import Cropper from 'react-cropper';
import 'cropperjs/dist/cropper.css';
import { useAuth } from '../../../context/AuthContext';
import ApiService from '../../../helpers/http/apiService';
import { useRequestLoading } from '../../../context/LoadingContext';
import { toast } from 'react-toastify';

function UploadAvatar({ previousImage, closeModal }) {
  const [selectedFile, setSelectedFile] = useState(null);
  const [croppedImage, setCroppedImage] = useState(null);
  const [showCropSection, setShowCropSection] = useState(false);
  const [showCropButton, setShowCropButton] = useState(true);
  const [loading, setLoading] = useState(false);
  const [btnActive, setBtnActive] = useState(false);
  const cropperRef = useRef(null);

  const { setRequestLoading } = useRequestLoading();
  const api = new ApiService();
  const { fetchUserData } = useAuth();

  useEffect(() => {
    if (previousImage) {
      fetchAndSetSelectedFile(previousImage);
    }
  }, [previousImage]);

  const fetchAndSetSelectedFile = async (url) => {
    try {
      setLoading(true);
      const [, imageType] = url.match(/\.(\w+)$/);
      const response = await fetch(`https:api.sourceher.com/v1/cdn?url=${url}`);
      const blob = await response.blob();
      const filename = `image_${Date.now()}.${imageType}`;
      const formattedFile = new File([blob], filename, { type: `image/${imageType}` });
      setSelectedFile(formattedFile);
      setShowCropSection(true);
    } catch (error) {
      console.error('Error fetching the image:', error);
    } finally {
      setLoading(false);
    }
  };

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
        setBtnActive(true)
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
        setBtnActive(false);
      }
    }
  };

  return (
    <div className="container mx-auto mt-5">
      <h1 className="text-3xl mb-6 font-semibold text-center text-gray-800">
        Image Uploader
      </h1>
      {loading ? (
        <div className="text-center">
            <div role="status">
                <svg aria-hidden="true" className="inline w-20 h-20 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                </svg>
                <span className="sr-only">Loading...</span>
            </div>
        </div>
      ) : selectedFile ? (
        <div className="mt-6">
          <h2 className="text-xl mb-2">Crop Image</h2>
          {showCropSection && (
            <div className="border border-gray-400 rounded-lg p-4">
              <Cropper
                ref={cropperRef}
                src={
                  selectedFile instanceof Blob
                    ? URL.createObjectURL(selectedFile)
                    : selectedFile
                }
                aspectRatio={1}
                guides={true}
                className="w-full h-96 rounded-lg"
              />
            </div>
          )}
          {showCropButton && (
            <button
              onClick={handleCrop}
              className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-xl shadow-lg focus:outline-none focus:ring focus:ring-blue-300"
            >
              Crop Image
            </button>
          )}
          {croppedImage && (
            <button
              onClick={handleReset}
              className="mt-2 bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-xl shadow-lg focus:outline-none focus:ring focus:ring-red-300"
            >
              Reset
            </button>
          )}
          <button
            onClick={handleRemoveImage}
            className="mt-2 bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-xl ml-3 shadow-lg focus:outline-none focus:ring focus:ring-red-300"
          >
            Remove Image
          </button>
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
                Drag & drop an image here, or click to select one
              </p>
            </div>
          )}
        </Dropzone>
      )}
      {croppedImage && (
        <div className="mt-6">
          <h2 className="text-xl mb-2">Cropped Image</h2>
          <img
            src={URL.createObjectURL(croppedImage.file)}
            alt="Cropped"
            className="max-w-xs mx-auto rounded-lg shadow-lg"
          />
          <button
            onClick={handleUpload}
            disabled={btnActive}
            className="mt-4 bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-xl shadow-lg focus:outline-none focus:ring focus:ring-green-300"
          >
            Upload Image
          </button>
        </div>
      )}
    </div>
  );
}

export default UploadAvatar;
