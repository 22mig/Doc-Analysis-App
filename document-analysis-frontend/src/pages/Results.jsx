import React from "react";
import { useLocation } from "react-router-dom";
import AnalysisResults from "../components/AnalysisResults";

const Results = () => {
  const location = useLocation();
  const { analysisData } = location.state || {};

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Analysis Results</h1>
      <AnalysisResults analysisData={analysisData} />
    </div>
  );
};

export default Results; // ✅ Ensure this line exists
