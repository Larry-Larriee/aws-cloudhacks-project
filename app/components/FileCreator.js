import React from "react";
import Image from "next/image";
import generateRandomString from "../randomString";

export default function FileCreator({ name, images, changeViewingFile }) {
  return (
    <div className="flex flex-col gap-5 mx-5">
      <h1 className="text-white text-2xl">{name}</h1>
      <section className="flex flex-col gap-1 px-5 hover:cursor-pointer">
        {images.map((image) => (
          <p
            className="text-white text-lg"
            key={generateRandomString(12) + image}
            onClick={(e) => {
              e.preventDefault();
              changeViewingFile(image);
            }}
          >
            {image.name}
          </p>
        ))}
      </section>
    </div>
  );
}
