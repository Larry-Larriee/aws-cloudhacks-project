import React from "react";
import generateRandomString from "../randomString";

export default function ExamCreator({ files }) {
  //   console.log(files);

  const uploadQuizToServer = async (headerName) => {
    function fileToBase64(file) {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();

        reader.onload = () => {
          resolve(reader.result); // reader.result contains the Base64 string
        };

        reader.onerror = (error) => {
          reject(error);
        };

        reader.readAsDataURL(file);
      });
    }

    const base64String = await fileToBase64(
      files.quizUploads.headers[1].images[0].image // specifically this image of the second folder
    );
    console.log("Base64 String:", base64String);

    fetch("https://gnqbg0e000.execute-api.us-west-2.amazonaws.com/quiz-image", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        content: base64String,
        id: generateRandomString(10),
        "file-location":
          files.quizUploads.headers[1] +
          "/" +
          files.quizUploads.headers[1].images[0].name,
      }),
    }).then((response) => {
      console.log(response);
    });
  };

  return (
    <>
      <div className="flex flex-col w-full px-5">
        <p className="text-black text-2xl">Select a Mock Exam to Create</p>

        {files.quizUploads.headers.map((header) => (
          <div
            key={generateRandomString(15) + header.name}
            className="bg-amazon-orange flex justify-center items-center w-64 rounded-lg h-10 my-2"
          >
            <a
              href="#"
              className="text-md text-black"
              onClick={() => uploadQuizToServer(header.name)}
            >
              {header.name}
            </a>
          </div>
        ))}
      </div>
    </>
  );
}
