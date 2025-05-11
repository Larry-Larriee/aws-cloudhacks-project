"use client";

import React, { useState } from "react";
import FileCreator from "./components/FileCreator";
import MainButtons from "./components/MainButtons";
import { testObject, defaultObject, modifiedTestObject } from "./fileObjects";
import FileView from "./components/FileView";
import ImageUpload from "./components/ImageUpload";
import FolderNameInput from "./components/FolderNameInput";
import ExamCreator from "./components/ExamCreator";

export default function Home() {
  const [files, setFiles] = useState(modifiedTestObject);
  const [openFileUpload, setOpenFileUpload] = useState(false);
  const [viewingFile, setViewingFile] = useState();

  const changeViewingFile = (file) => {
    setViewingFile(file);
  };

  const addFolder = (folder) => {
    let newFiles = {
      // ... uses existing elements in the object
      ...files,
      quizUploads: {
        ...files.quizUploads,
        headers: [
          ...files.quizUploads.headers,
          {
            name: folder,
            images: [],
          },
        ],
      },
      mockExams: {
        ...files.mockExams,
        headers: [
          ...files.mockExams.headers,
          {
            name: folder,
            images: [],
          },
        ],
      },
    };
    setFiles(newFiles);
  };

  const getAllFolderNames = () => {
    let folderNames = [];
    files.quizUploads.headers.forEach((header) => {
      folderNames.push(header.name);
    });
    return folderNames;
  };

  const addFile = (folder, file) => {
    files.quizUploads.headers.forEach((header) => {
      if (header.name === folder) {
        header.images.push({
          image: file,
          name: file.name,
        });
      }

      console.log(files);
    });
  };

  const [folderName, setFolderName] = useState("");
  const [openFolderNameInput, setOpenFolderNameInput] = useState(false);

  const changeFolderName = (event) => {
    setFolderName(event.target.value);
  };

  const confirmFolderName = () => {
    if (folderName !== "") {
      addFolder(folderName);
      setFolderName("");
      setOpenFolderNameInput(false);
    }
  };

  const [openCreateExam, setOpenCreateExam] = useState(false);

  return (
    <div className="flex flex-col w-full min-h-screen">
      <nav className="flex bg-black w-full h-16 gap-5 px-5 items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="white"
          className="size-12"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
          />
        </svg>

        <p className="text-white text-2xl">Cognition</p>
      </nav>

      <main className="flex w-full min-h-screen">
        <section className="w-section min-h-96 py-5 flex flex-col gap-6 bg-amazon-blue">
          <div className="flex justify-between ml-5 mr-10 items-center">
            <p className="text-amazon-white text-xl">Quiz Uploads:</p>
            <MainButtons
              setOpenFileUpload={setOpenFileUpload}
              setOpenFolderNameInput={setOpenFolderNameInput}
              setOpenCreateExam={setOpenCreateExam}
            />
          </div>
          {files.quizUploads.headers.map((header, index) => (
            <FileCreator
              key={index}
              name={header.name}
              images={header.images}
              changeViewingFile={changeViewingFile}
            />
          ))}
          <div className="ml-5 w-line border-b-2 border-amazon-white"></div>
          <div className="flex justify-between ml-5 mr-10 items-center">
            <p className="text-amazon-white text-xl">Mock Exams:</p>
            <MainButtons
              quizUploads={false}
              mockExams={true}
              setOpenFileUpload={setOpenFileUpload}
              setOpenFolderNameInput={setOpenFolderNameInput}
              setOpenCreateExam={setOpenCreateExam}
            />
          </div>
          {files.mockExams.headers.map((header, index) => (
            <FileCreator
              key={index}
              name={header.name}
              images={header.images}
            />
          ))}
        </section>

        <div className="py-5 gap-8 w-full flex items-center min-h-full flex-col">
          {openFolderNameInput && (
            <FolderNameInput
              folderName={folderName}
              changeFolderName={changeFolderName}
              confirmFolderName={confirmFolderName}
            />
          )}
          {openFileUpload && (
            <>
              <ImageUpload
                files={files}
                addFile={addFile}
                getAllFolderNames={getAllFolderNames}
                setOpenFileUpload={setOpenFileUpload}
              />
            </>
          )}
          {openCreateExam && (
            <>
              <ExamCreator files={files} />
            </>
          )}

          <FileView viewingFile={viewingFile} />
        </div>
      </main>
    </div>
  );
}
