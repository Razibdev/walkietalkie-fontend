import React, { useState, useRef } from "react";
import {X, CloudUpload} from "lucide-react";
import ImageFile from "../FormInputs/ImageFile";
const ImageUpload = ({ onImageChange, title = "Upload Image", initialImagePreview='' }) => {
  const [imagePreview, setImagePreview] = useState(null);
  const [uploadedImage, setUploadedImage] = useState(null);
  const fileInputRef = useRef(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result);
    };
    reader.readAsDataURL(file);

    setUploadedImage(file);
    onImageChange(file);
  };

  const removeImage = () => {
    setImagePreview(null);
    setUploadedImage(null);
    onImageChange(null);
  };

  return (
    <div>
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        style={{ display: "none" }}
        ref={fileInputRef}
      />
      <button
        className="flex gap-2 text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        type="button"
        onClick={() => fileInputRef.current.click()}
      >
        <CloudUpload /> {title}
      </button>

      {imagePreview
        ? imagePreview && (
            <div className="flex relative w-64 h-64 mt-4">
              <img src={imagePreview} className="w-full h-full" alt="Preview" />
              <X
                onClick={removeImage}
                className="top-0 right-2 absolute cursor-pointer"
              />
            </div>
          )
        : initialImagePreview && (
            <div className="flex relative w-64 h-64 mt-4">
              <ImageFile
                src={initialImagePreview}
                className="w-full h-full"
                alt="Preview"
              />
              <X
                onClick={removeImage}
                className="top-0 right-2 absolute cursor-pointer"
              />
            </div>
          )}
    </div>
  );
};

export default ImageUpload;
