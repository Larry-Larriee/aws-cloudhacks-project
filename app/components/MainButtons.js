import React from "react";

export default function MainButtons({
  quizUploads = true,
  mockExams = false,
  setOpenFolderNameInput,
  setOpenFileUpload,
  setOpenCreateExam,
}) {
  return (
    <>
      {quizUploads == true && mockExams == false && (
        <article className="flex gap-5">
          <div className="bg-amazon-orange flex justify-center items-center w-36 h-10 rounded-xl">
            <a
              href="#"
              onClick={(e) => setOpenFolderNameInput(true)}
              className="text-xl text-black"
            >
              Create Folder
            </a>
          </div>
          <div className="bg-amazon-orange flex justify-center items-center w-36 h-10 rounded-xl">
            <a
              href="#"
              className="text-xl text-black"
              onClick={(e) => setOpenFileUpload(true)}
            >
              Upload Image
            </a>
          </div>
        </article>
      )}

      {quizUploads == false && mockExams == true && (
        <article className="flex gap-5">
          <div className="bg-amazon-orange flex justify-center items-center w-36 h-10 rounded-xl">
            <a
              href="#"
              className="text-xl text-black"
              onClick={() => setOpenCreateExam(true)}
            >
              Create Exam
            </a>
          </div>
        </article>
      )}
    </>
  );
}
