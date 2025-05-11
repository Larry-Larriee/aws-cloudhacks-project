import React, { useState, useEffect, useCallback } from "react";
import { useDropzone } from "react-dropzone";

function ImageUpload({ files, addFile, getAllFolderNames, setOpenFileUpload }) {
  const [fileDragged, setFileDragged] = useState(false);
  const [userSelectedFolderName, setUserSelectedFolderName] = useState("");

  const [middlemanFileStorage, setMiddlemanFileStorage] = useState({});

  const onDrop = useCallback(
    (acceptedFiles) => {
      setFileDragged(true);

      acceptedFiles.forEach(async (file) => {
        setMiddlemanFileStorage(() => {
          return {
            ...middlemanFileStorage,
            file, // You can now use this 'file' Blob
          };
        });
      });
    },
    [middlemanFileStorage, setMiddlemanFileStorage]
  );

  useEffect(() => {
    console.log(middlemanFileStorage);
  }, [middlemanFileStorage]);

  useEffect(() => {
    if (
      userSelectedFolderName !== "" &&
      Object.keys(middlemanFileStorage).length > 0
    ) {
      addFile(userSelectedFolderName, middlemanFileStorage.file);
      setOpenFileUpload(false);
      setFileDragged(false);
    }
  }, [
    addFile,
    middlemanFileStorage,
    setOpenFileUpload,
    userSelectedFolderName,
  ]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: "image/*",
  });

  return (
    <>
      <div {...getRootProps()} style={dropzoneStyle}>
        <input {...getInputProps()} />
        <p className="text-xl text-black">
          Drag and drop some images here, or click to select files
        </p>
      </div>

      {fileDragged && (
        <div className="w-full px-5">
          <p className="text-black text-2xl">
            Select a folder to add the file into
          </p>

          {getAllFolderNames().map((folderName) => (
            <div
              key={folderName}
              className="bg-amazon-orange flex justify-center items-center w-64 rounded-lg h-10  my-2"
            >
              <a
                href="#"
                onClick={(e) => {
                  setUserSelectedFolderName(folderName);
                }}
                className="text-md text-black"
              >
                {folderName}
              </a>
            </div>
          ))}
        </div>
      )}
    </>
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

export default ImageUpload;
