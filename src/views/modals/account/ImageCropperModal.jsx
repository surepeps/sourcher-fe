import React, { useState, useRef } from "react";
import ReactCrop from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";
import { createPortal } from "react-dom";

const ImageCropperModal = ({ image, onClose }) => {
  const [crop, setCrop] = useState({ unit: "%", width: 30, aspect: 1 / 1 });
  const [previewImage, setPreviewImage] = useState(null);
  const imgRef = useRef(null);

  const onImageLoaded = (image) => {
    imgRef.current = image;
  };

  const onCropChange = (newCrop) => {
    setCrop(newCrop);
  };

  const onCropComplete = (crop) => {
    makeClientCrop(crop);
  };

  const makeClientCrop = async (crop) => {
    if (imgRef.current && crop.width && crop.height) {
      const croppedImageUrl = await getCroppedImg(imgRef.current, crop);
      setPreviewImage(croppedImageUrl);
    }
  };

  const getCroppedImg = (image, crop) => {
    const canvas = document.createElement("canvas");
    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
    canvas.width = crop.width;
    canvas.height = crop.height;
    const ctx = canvas.getContext("2d");

    ctx.drawImage(
      image,
      crop.x * scaleX,
      crop.y * scaleY,
      crop.width * scaleX,
      crop.height * scaleY,
      0,
      0,
      crop.width,
      crop.height
    );

    return new Promise((resolve, reject) => {
      canvas.toBlob((blob) => {
        if (!blob) {
          reject(new Error("Canvas is empty"));
          return;
        }
        resolve(URL.createObjectURL(blob));
      }, "image/jpeg");
    });
  };

  return createPortal(
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40">
      <div className="bg-white w-3/4 md:w-1/2 lg:w-1/3 p-6 rounded-lg shadow-lg">
        <div className="mb-4">
          <h1 className="text-xl font-semibold">Image Cropper</h1>
        </div>
        <div className="mb-4">
          <ReactCrop
            src={image}
            crop={crop}
            onImageLoaded={onImageLoaded}
            onComplete={onCropComplete}
            onChange={onCropChange}
          />
        </div>
        <div className="mb-4">
          <img src={previewImage} alt="Preview" />
        </div>
        <div className="flex justify-end">
          <button
            className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
            onClick={() => onClose(previewImage)}
          >
            Close
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default ImageCropperModal;
