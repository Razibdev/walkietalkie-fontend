import React, { useState, useRef } from "react";
import { X, CloudUpload } from "lucide-react";
import ImageFile from "../FormInputs/ImageFile";
const MulImageUpload = ({
  onImagesChange,
  title = "Upload Images",
  initialImagePreview=[],
}) => {
  const [imagePreviews, setImagePreviews] = useState([]);
  const [uploadedImages, setUploadedImages] = useState([]);
  const fileInputRef = useRef(null);

  const handleImageChange = (e) => {
    setImagePreviews([]);
    const files = Array.from(e.target.files);

    files.forEach((file) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreviews((prevPreviews) => [...prevPreviews, reader.result]);
      };
      reader.readAsDataURL(file);
    });

    setUploadedImages((prevImages) => [...prevImages, ...files]);
    onImagesChange(files);
  };

  const removeImage = (index) => {
    const newPreviews = [...imagePreviews];
    newPreviews.splice(index, 1);
    setImagePreviews(newPreviews);

    const newImages = [...uploadedImages];
    newImages.splice(index, 1);
    setUploadedImages(newImages);

    onImagesChange(newImages);
  };

  return (
    <div>
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        style={{ display: "none" }}
        ref={fileInputRef}
        multiple
      />
      <button
        type="button"
        className="flex gap-2 text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        onClick={() => fileInputRef.current.click()}
      >
        <CloudUpload /> {title}
      </button>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
        {imagePreviews.length >0 ? (
            imagePreviews.map((preview, index) => (
          <div
            key={index}
            className=" w-60 h-60 mt-4"
            style={{ position: "relative", zIndex: 0 }}
          >
            <img
              src={preview}
              alt={`Preview ${index}`}
              className="w-full h-full"
            />
            <X
              onClick={() => removeImage(index)}
              className="top-0 right-2 cursor-pointer"
              style={{ position: "absolute" }}
            />
          </div>
        ))
        ) : (
            initialImagePreview.map((preview, index) => (
          <div
            key={index}
            className=" w-60 h-60 mt-4"
            style={{ position: "relative", zIndex: 0 }}
          >
            <ImageFile
              src={preview}
              alt={`Preview ${index}`}
              className="w-full h-full"
            />
            <X
              onClick={() => removeImage(index)}
              className="top-0 right-2 cursor-pointer"
              style={{ position: "absolute" }}
            />
          </div>
        ))
        )}
      
      </div>
    </div>
  );
};

export default MulImageUpload;
