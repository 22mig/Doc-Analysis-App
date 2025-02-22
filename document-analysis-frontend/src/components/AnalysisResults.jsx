import React from "react";

const AnalysisResults = ({ analysisData }) => {
  if (!analysisData) return <p>No data available.</p>;

  return (
    <div className="p-4 border rounded-lg shadow-lg">
      <h2 className="text-xl font-bold mb-2">Analysis Results</h2>
      <p><strong>Word Count:</strong> {analysisData.wordCount}</p>
      <p><strong>Character Count:</strong> {analysisData.charCount}</p>
      <p><strong>Sentence Count:</strong> {analysisData.sentenceCount}</p>
      <p><strong>Average Word Length:</strong> {analysisData.avgWordLength}</p>

      <h3 className="mt-4 font-bold">Top 20 Words:</h3>
      <ul>
        {analysisData.topWords.map((word, index) => (
          <li key={index}>{word}</li>
        ))}
      </ul>
    </div>
  );
};

export default AnalysisResults;
