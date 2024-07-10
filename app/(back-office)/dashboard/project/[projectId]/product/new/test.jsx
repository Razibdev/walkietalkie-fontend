import React, {useState} from 'react'
import TextFile from "@/components/FormInputs/TextFile";
export default function Test() {
   const [imagePreviews, setImagePreviews] = useState([]);
   const [selectedFiles, setSelectedFiles] = useState([]);

    const handleFileChange = (event) => {
      const files = event.target.files;
      const previews = [];
      const newFiles = [];

      // Iterate through selected files and create image previews
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const reader = new FileReader();

        reader.onload = (e) => {
          previews.push(e.target.result);
          newFiles.push(file);
          if (previews.length === files.length) {
            // Once all previews are generated, update state
            setImagePreviews(previews);
            setSelectedFiles(newFiles);
          }
        };

        reader.readAsDataURL(file);
      }
    };

    // Function to remove an image preview and its corresponding file
    const removeImagePreview = (index) => {
      const updatedPreviews = [...imagePreviews];
      updatedPreviews.splice(index, 1);
      setImagePreviews(updatedPreviews);

      const updatedFiles = [...selectedFiles];
      updatedFiles.splice(index, 1);
      setSelectedFiles(updatedFiles);
    };

     async function onSubmit(data) {
       console.log(data);
       if (isUpdate) {
         // Update request
         makePutRequest(
           setLoading,
           `api/categories/${initialData.id}`,
           data,
           "Category",
           redirect,
           reset
         );
       } else {
         makePostRequest(setLoading, "api/categories", data, "Category", reset);
       }
     }
  return (
    <div>
      <TextFile
            label="Upload Images"
            name="images"
            register={register}
            errors={errors}
            onChange={handleFileChange}
          />
    </div>
  );
}
