import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';

const ImageUploader = () => {
  const [uploadedImage, setUploadedImage] = useState(null);
  const [crop, setCrop] = useState({ unit: '%', width: 30, aspect: 1 / 1 });
  const [croppedImage, setCroppedImage] = useState(null);

  const onImageLoaded = (image) => {
    // Handle any logic when the image is loaded
  };

  const onCropChange = (newCrop) => {
    setCrop(newCrop);
  };

  const getCroppedImage = () => {
    if (uploadedImage) {
      const canvas = document.createElement('canvas');
      const scaleX = uploadedImage.naturalWidth / uploadedImage.width;
      const scaleY = uploadedImage.naturalHeight / uploadedImage.height;
      canvas.width = crop.width;
      canvas.height = crop.height;
      const ctx = canvas.getContext('2d');

      ctx.drawImage(
        uploadedImage,
        crop.x * scaleX,
        crop.y * scaleY,
        crop.width * scaleX,
        crop.height * scaleY,
        0,
        0,
        crop.width,
        crop.height
      );

      canvas.toBlob((blob) => {
        setCroppedImage(URL.createObjectURL(blob));
      }, 'image/jpeg');
    }
  };

  const onDrop = (acceptedFiles) => {
    const file = acceptedFiles[0];
    const blobUrl = URL.createObjectURL(file);
    setUploadedImage(new Image());
    uploadedImage.src = blobUrl;
  };

  const removeImage = () => {
    setUploadedImage(null);
    setCroppedImage(null);
  };

  return (
    <div className="bg-gray-100 p-4 rounded-lg border border-gray-300">
      {uploadedImage ? (
        <div className="text-center">
          <ReactCrop
            src={uploadedImage.src}
            crop={crop}
            onImageLoaded={onImageLoaded}
            onChange={onCropChange}
          />
          <button
            className="mt-2 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg"
            onClick={removeImage}
          >
            Remove Image
          </button>
        </div>
      ) : (
        <div className="text-center">
          <div className="border-dashed border-2 border-gray-300 p-8 rounded-lg cursor-pointer">
            <div {...getRootProps()}>
              <input {...getInputProps()} />
              {isDragActive ? (
                <p className="text-blue-600">Drop the image here...</p>
              ) : (
                <p className="text-gray-600">Drag & drop an image here, or click to select one</p>
              )}
            </div>
          </div>
        </div>
      )}
      {uploadedImage && (
        <div className="mt-4">
          <button
            className="bg-blue-500 hover-bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
            onClick={getCroppedImage}
          >
            Crop Image
          </button>
          {croppedImage && (
            <button
              className="ml-4 bg-blue-500 hover-bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
              onClick={handleUpload}
            >
              Upload Image
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default ImageUploader;
