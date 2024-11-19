'use client';
import { useState, useEffect } from "react";
import "../app/globals.css";

const fieldLabels = {
  age: "Age", 
  durationOfSymptoms: "Duration of Symptoms",
  obsessionType: "Obsession Type",
  compulsionType: "Compulsion Type",
  depressionDiagnosis: "Depression Diagnosis",  
  anxietyDiagnosis: "Anxiety Diagnosis",
};

const DisplayResult = ({ result, answers, storyId }) => {
  const [therapy, setTherapy] = useState(null);

  useEffect(() => {
    if (storyId) {
      fetch(`https://osm-backend-deploy-1.onrender.com/api/therapy/${storyId}`)
        .then((response) => response.json())
        .then((data) => setTherapy(data))
        .catch((error) => console.error("Error fetching therapy data:", error));
    }
  }, [storyId]);

  return (
    <div className="fixed inset-0 bg-gray-50 overflow-y-auto">
      <div className="flex min-h-screen justify-center items-center p-4">
        <div className="bg-white border-2 border-[#ff4b2b] rounded-2xl p-8 md:p-12 
                      max-w-2xl w-full shadow-xl transition-all duration-300 
                      hover:shadow-2xl mx-auto my-8">
          
          <h2 className="text-3xl md:text-4xl text-[#ff4b2b] font-bold mb-8 
                         text-center tracking-tight">
            Your Prediction Result
          </h2>

          <div className="space-y-6">
            <div className="result-stats space-y-4">
              <p className="text-xl">
                <span className="font-semibold">OCD Severity:</span>
                <span className="ml-2">{result.severity}</span>
              </p>
              <p className="text-xl">
                <span className="font-semibold">OCD Percentage:</span>
                <span className="ml-2">{result.percentage.toFixed(2)}%</span>
              </p>
            </div>

            <div className="answers-section">
              <h3 className="text-xl font-semibold mb-4">Your Answers</h3>
              <ul className="space-y-3">
                {Object.keys(answers).map((field, index) => (
                  <li key={index} className="text-gray-700">
                    <span className="font-medium">{fieldLabels[field] || field}:</span>
                    <span className="ml-2">{answers[field]}</span>
                  </li>
                ))}
              </ul>
            </div>

            {therapy?.chapters && (
              <div className="therapy-section mt-8">
                <h3 className="text-2xl text-[#ff4b2b] font-semibold mb-6">
                  Suggested Therapy
                </h3>
                <h4 className="text-xl mb-6 font-medium">{therapy.title}</h4>
                <div className="space-y-8">
                  {therapy.chapters.map((chapter, index) => (
                    <div key={index} className="bg-gray-50 p-6 rounded-lg">
                      <h5 className="text-lg font-semibold mb-3">
                        {chapter.title}
                      </h5>
                      <p className="text-gray-700 mb-4">{chapter.exercise}</p>
                      <p className="text-gray-700">{chapter.activity}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisplayResult;