"use client";
import { useEffect, useState } from "react";

const TherapyDetails = ({ storyId }) => {
  const [therapy, setTherapy] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTherapy = async () => {
      try {
        setLoading(true); // Set loading to true when starting the fetch
        const response = await fetch(`/api/therapy/${storyId}`);
        
        // Check if the response is ok (status code 200-299)
        if (!response.ok) {
          throw new Error('Failed to fetch therapy details');
        }

        const data = await response.json();
        setTherapy(data); // Set the therapy data
      } catch (error) {
        setError(error.message); // Handle errors
      } finally {
        setLoading(false); // Set loading to false after fetching
      }
    };

    if (storyId) {
      fetchTherapy();
    }
  }, [storyId]);

  if (loading) return <p>Loading therapy details...</p>;
  if (error) return <p>Error fetching therapy details: {error}</p>;

  return (
    <div className="therapy-container">
      <h2 className="text-2xl font-bold">{therapy.title}</h2>
      {therapy.chapters.map((chapter, index) => (
        <div key={index} className="chapter">
          <h3 className="text-xl font-semibold">{chapter.title}</h3>
          <p><strong>CBT Exercise:</strong> {chapter.exercise}</p>
          <p><strong>Activity:</strong> {chapter.activity}</p>
        </div>
      ))}
    </div>
  );
};

export default TherapyDetails;
