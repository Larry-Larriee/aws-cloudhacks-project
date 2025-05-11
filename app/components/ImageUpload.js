import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";

function MyDropzone({ files, changeFiles }) {
  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.forEach((file) => {
      console.log("Dropped file:", file); // This is a File (Blob) object

      //   changeFiles();

      // You can now use this 'file' Blob
    });
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: "image/*",
  });

  return (
    <div {...getRootProps()} style={dropzoneStyle}>
      <input {...getInputProps()} />
      <p className="text-xl text-black">
        Drag and drop some images here, or click to select files
      </p>
    </div>
  );
}

const dropzoneStyle = {
  // Your styling here
  border: "1px dashed #ccc",
  padding: "10rem",
  textAlign: "center",
  width: "95%",
  height: "30rem",
};

export default MyDropzone;
