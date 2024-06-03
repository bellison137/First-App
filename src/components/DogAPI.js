import React, { useState, useEffect } from 'react';

function DogAPI() {
  const [fact, setFact] = useState(null);

  useEffect(() => {
    const fetchApiData = async () => {
      try {
        const response = await fetch('https://dogapi.dog/api/v2/facts?limit=1');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const { data } = await response.json();
        if (data && data.length > 0) {
          setFact(data[0].attributes.body);
        }
      } catch (error) {
        console.error('Error fetching API data:', error);
      }
    };

    fetchApiData();
  }, []);

  return (
    <div>
      <h2>Random Dog Fact:</h2>
      {fact ? (
        <p>{fact}</p>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default DogAPI;
