import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import axios from "axios";

const FileUpload = ({ onUploadComplete }) => {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const { getRootProps, getInputProps } = useDropzone({
    accept: ".pdf",
    multiple: false,
    onDrop: (acceptedFiles) => {
      if (acceptedFiles.length === 0) {
        setError("Only PDF files are allowed.");
        return;
      }
      setFile(acceptedFiles[0]);
      setError("");
    },
  });

  const handleUpload = async () => {
    if (!file) {
      setError("Please select a file to upload.");
      return;
    }
    setLoading(true);
    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await axios.post("http://localhost:5000/upload", formData);
      onUploadComplete(response.data);
    } catch (err) {
      setError("File upload failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 border rounded-lg shadow-lg text-center">
      <div {...getRootProps()} className="border-dashed border-2 p-6 rounded-lg cursor-pointer">
        <input {...getInputProps()} />
        <p className="text-gray-500">Drag & drop a PDF file here, or click to select one</p>
      </div>
      {file && <p className="mt-2 text-sm text-gray-700">Selected: {file.name}</p>}
      {error && <p className="mt-2 text-red-500">{error}</p>}
      <button
        onClick={handleUpload}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700"
        disabled={loading}
      >
        {loading ? "Uploading..." : "Upload"}
      </button>
    </div>
  );
};

export default FileUpload;
