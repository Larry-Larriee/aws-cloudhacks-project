import React from "react";
import Image from "next/image";

export default function FileView() {
  return (
    <>
      <Image
        alt="temporary image"
        width={25}
        height={25}
        className=" w-3/4 h-image bg-gray-200"
        src="https://example.com/hello.jpg" // Replace with your image URL
      />
      <section className="flex justify-between px-28 items-center w-full ">
        <div className="flex flex-col gap-1">
          <p className="text-gray-400 text-lg">My Upcoming Midterm.zip</p>
          <p className="text-gray-400 text-lg">1 of 5</p>
        </div>

        <div className="flex gap-3">
          <div className="bg-amazon-orange flex justify-center items-center w-30 h-10 rounded-xl">
            <a href="#" className="text-xl text-black">
              Previous
            </a>
          </div>
          <div className="bg-amazon-orange flex justify-center items-center w-28 h-10 rounded-xl">
            <a href="#" className="text-xl text-black">
              Next
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
