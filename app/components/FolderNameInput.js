import React from "react";

export default function FolderNameInput({
  folderName,
  changeFolderName,
  confirmFolderName,
  
}) {
  return (
    <>
      <section className="w-full px-5">
        <input
          type="text"
          value={folderName}
          onChange={changeFolderName}
          placeholder="Enter your folder name here"
          className="outline-1 outline-gray-300 w-64 rounded-sm px-4 py-2"
        />
        <a
          href="#" // Use '#' or a relevant URL if you want actual navigation
          onClick={confirmFolderName}
          style={{
            display: "inline-block",
            padding: "8px 12px",
            backgroundColor: folderName.trim() ? "#007bff" : "#6c757d",
            color: "white",
            outline: folderName.trim()
              ? "1px solid #007bff"
              : "1px solid #6c757d",
            textDecoration: "none",
            borderRadius: "5px",
            marginLeft: "10px",
            cursor: folderName.trim() ? "pointer" : "not-allowed",
            opacity: folderName.trim() ? 1 : 0.6,
          }}
        >
          Confirm
        </a>
      </section>
    </>
  );
}
