import React, { useState, useRef } from 'react';
import axios from 'axios';
import Dropzone from 'react-dropzone';
import Cropper from 'react-cropper';
import 'cropperjs/dist/cropper.css';

function UploadAvatar() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [croppedImage, setCroppedImage] = useState(null);
  const [showCropSection, setShowCropSection] = useState(false);
  const [showCropButton, setShowCropButton] = useState(true);
  const cropperRef = useRef(null);

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
        const croppedDataUrl = croppedCanvas.toDataURL(selectedFile.type);
        setCroppedImage(croppedDataUrl);
        setShowCropSection(false);
        setShowCropButton(false);
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
        const response = await axios.post(
          'https://api.sourceher.com/v1/user/update',
          {
            image: croppedImage,
          }
        );
        console.log('Image uploaded successfully', response);
      } catch (error) {
        console.error('Image upload failed', error);
      }
    }
  };

  return (
    <div className="container mx-auto mt-5">
      <h1 className="text-3xl mb-6 font-semibold text-center text-gray-800">
        Advanced Image Uploader
      </h1>
      {selectedFile ? (
        <div className="mt-6">
          <h2 className="text-xl mb-2">Crop Image</h2>
          {showCropSection && (
            <div className="border border-gray-400 rounded-lg p-4">
              <Cropper
                ref={cropperRef}
                src={selectedFile && URL.createObjectURL(selectedFile)}
                aspectRatio={1}
                guides={true}
                className="w-full h-96 rounded-lg"
              />
            </div>
          )}
          {showCropButton && (
            <button
              onClick={handleCrop}
              className="mt-4 bg-blue-500 hover:bg-blue-600 mr-2 text-white font-semibold py-2 px-4 rounded-xl shadow-lg focus:outline-none focus:ring focus:ring-blue-300"
            >
              Crop Image
            </button>
          )}
          {croppedImage && (
            <button
              onClick={handleReset}
              className="mt-2 bg-red-500 hover:bg-red-600 mr-2 text-white font-semibold py-2 px-4 rounded-xl shadow-lg focus:outline-none focus:ring focus:ring-red-300"
            >
              Reset
            </button>
          )}
          <button
            onClick={handleRemoveImage}
            className="mt-2 bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-xl shadow-lg focus:outline-none focus:ring focus:ring-red-300"
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
                Drag &amp; drop an image here, or click to select one
              </p>
            </div>
          )}
        </Dropzone>
      )}
      {croppedImage && (
        <div className="mt-6">
          <h2 className="text-xl mb-2">Cropped Image</h2>
          <img
            src={croppedImage}
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
      )}
    </div>
  );
}

export default UploadAvatar;
