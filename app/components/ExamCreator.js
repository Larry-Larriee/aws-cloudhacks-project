import React from "react";
import generateRandomString from "../randomString";

export default function ExamCreator({ files }) {
  //   console.log(files);

  return (
    <>
      <div className="flex flex-col w-full px-5">
        <p className="text-black text-2xl">Select a Mock Exam to Create</p>

        {files.quizUploads.headers.map((header) => (
          <div
            key={generateRandomString(15) + header.name}
            className="bg-amazon-orange flex justify-center items-center w-64 rounded-lg h-10 my-2"
          >
            <a href="#" className="text-md text-black">
              {header.name}
            </a>
          </div>
        ))}
      </div>
    </>
  );
}
