import React from "react";

export default function MainButtons({ quizUploads = true, mockExams = false }) {
  return (
    <>
      {quizUploads == true && mockExams == false && (
        <article className="flex gap-5">
          <div className="bg-amazon-orange flex justify-center items-center w-36 h-10 rounded-xl">
            <a href="#" className="text-xl text-black">
              Create Folder
            </a>
          </div>
          <div className="bg-amazon-orange flex justify-center items-center w-36 h-10 rounded-xl">
            <a href="#" className="text-xl text-black">
              Upload Image
            </a>
          </div>
        </article>
      )}

      {quizUploads == false && mockExams == true && (
        <article className="flex gap-5">
          <div className="bg-amazon-orange flex justify-center items-center w-36 h-10 rounded-xl">
            <a href="#" className="text-xl text-black">
              Create Exam
            </a>
          </div>
        </article>
      )}
    </>
  );
}
