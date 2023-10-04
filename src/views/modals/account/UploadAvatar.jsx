import React, { useState, useRef } from 'react';
import axios from 'axios';
import Dropzone from 'react-dropzone';
import Cropper from 'react-cropper';
import 'cropperjs/dist/cropper.css';

function UploadAvatar() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [croppedImage, setCroppedImage] = useState(null);
  const [showCropSection, setShowCropSection] = useState(false);
  const [showCropButton, setShowCropButton] = useState(true); // State to control the visibility of the Crop Image button
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
        setShowCropButton(false); // Hide the Crop Image button when clicked
      }
    }
  };

  const handleReset = () => {
    setCroppedImage(null);
    setShowCropSection(true);
    setShowCropButton(true); // Show the Crop Image button when Reset is clicked
  };

  const handleRemoveImage = () => {
    setSelectedFile(null);
    setCroppedImage(null);
    setShowCropSection(false);
    setShowCropButton(true); // Show the Crop Image button when the image is removed
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
      <h1 className="text-2xl mb-4">Advanced Image Uploader</h1>
      {selectedFile ? (
        <div className="mt-4">
          <h2 className="text-xl mb-2">Crop Image</h2>
          {showCropSection && (
            <div className="border border-gray-400">
              <Cropper
                ref={cropperRef}
                src={selectedFile && URL.createObjectURL(selectedFile)}
                aspectRatio={1}
                guides={true}
              />
            </div>
          )}
          {showCropButton && (
            <button
              onClick={handleCrop}
              className="mt-2 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            >
              Crop Image
            </button>
          )}
          {croppedImage && (
            <button
              onClick={handleReset}
              className="ml-2 bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
            >
              Reset
            </button>
          )}
          <button
            onClick={handleRemoveImage}
            className="ml-2 bg-red-500 text-white py-2 px-4 rounded hover-bg-red-600"
          >
            Remove Image
          </button>
        </div>
      ) : (
        <Dropzone onDrop={onDrop} accept="image/*" multiple={false}>
          {({ getRootProps, getInputProps }) => (
            <div
              {...getRootProps()}
              className="border-dashed border-2 border-gray-400 p-4 text-center cursor-pointer"
            >
              <input {...getInputProps()} />
              <p>Drag &amp; drop an image here, or click to select one</p>
            </div>
          )}
        </Dropzone>
      )}
      {croppedImage && (
        <div className="mt-4">
          <h2 className="text-xl mb-2">Cropped Image</h2>
          <img src={croppedImage} alt="Cropped" className="max-w-xs" />
          <button
            onClick={handleUpload}
            className="mt-2 bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
          >
            Upload Image
          </button>
        </div>
      )}
    </div>
  );
}

export default UploadAvatar;
