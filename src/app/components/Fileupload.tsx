import React from 'react';
import { FiUpload } from 'react-icons/fi';

const FileUpload = () => {
  const handleFileChange = (e:any) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      // Handle the selected file(s) here
      console.log(files[0]); // For example, logging the first file
    } else {
      console.log('No files selected');
    }
  };

  return (
    <div className="flex items-center flex-col gap-4 hover:text-blue-400 ">
      <label className="flex items-center flex-col cursor-pointer">
        <input
          type="file"
          className="hidden"
          onChange={handleFileChange}
        />
        <div className="flex items-center rounded-xl justify-center border-[1px] border-dashed h-[250px] w-[300px] text-xl hover:border-blue-400 ">
          <FiUpload />
        </div>
        <p>Upload File</p>
      </label>
    </div>
  );
};

export default FileUpload;
