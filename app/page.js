"use client";

import React, { useState } from "react";
import Image from "next/image";
import FileCreator from "./components/FileCreator";
import MainButtons from "./components/MainButtons";
import testObject from "./fileObjects";

export default function Home() {
  const [files, setFiles] = useState(testObject);

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

      <main className="flex w-3/4 h-full">
        <section className="w-full min-h-96 py-5 flex flex-col gap-6 bg-amazon-blue">
          <div className="flex justify-between ml-5 mr-10 items-center">
            <p className="text-amazon-white text-xl">Quiz Uploads:</p>
            <MainButtons />
          </div>

          <FileCreator />
          <FileCreator />

          <div className="ml-5 w-line border-b-2 border-amazon-white"></div>

          <div className="flex justify-between ml-5 mr-10 items-center">
            <p className="text-amazon-white text-xl">Mock Exams:</p>
            <MainButtons quizUploads={false} mockExams={true} />
          </div>

          <FileCreator />
          <FileCreator />
        </section>

        <div className="w-full h-full"></div>
      </main>
    </div>
  );
}
