import React, { useState } from "react";
import FileUpload from "../components/FileUpload";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleUploadComplete = (data) => {
    navigate("/results", { state: { analysisData: data } });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Document Analysis</h1>
      <FileUpload onUploadComplete={handleUploadComplete} />
    </div>
  );
};

export default Home;
