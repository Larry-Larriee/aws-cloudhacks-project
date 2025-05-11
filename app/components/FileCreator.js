import React from "react";
import Image from "next/image";
import generateRandomString from "../randomString";

export default function FileCreator({ name, images }) {
  return (
    <div className="flex flex-col gap-5 mx-5">
      <h1 className="text-white text-2xl">{name}</h1>
      <section className="flex flex-col gap-1 px-5">
        {images.map((image) => (
          // onClick, maybe send back to page the blob url (just make
          // sure you're not prop drilling too much lol)
          <p
            className="text-white text-lg"
            key={generateRandomString(12) + image}
          >
            {image.name}
          </p>
        ))}
      </section>
    </div>
  );
}
