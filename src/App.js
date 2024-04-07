import React, { useState, useEffect } from 'react';

const ApiExample = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    // hardcoding since for some reason the mounted file has html content, and parsing fails
    const apiUrl = window?.configs?.apiUrl ? window.configs.apiUrl : "/choreo-apis/movieservice/movieapi/app-7da/v1.0";
    const fullUrl = apiUrl.concat('/movies')
    console.log(fullUrl)
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          setTimeout(async () => {
            const response = await fetch(fullUrl);
            const result = await response.json();
            setData(result);
            setLoading(false);
          }, 1000);
        } catch (error) {
          console.error('Error fetching data:', error);
          setLoading(false);
        }
      };
  
      fetchData();
    }, []);
  
    return (
      <div>
        <h1>Random Movie Details</h1>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <ul>
            <tr>
                <th>Title</th>
                <th>Year</th>
                <th>Genre</th>
                <th>Director</th>
                <th>Actors</th>
            </tr>
            {data.map((item) => (
                <tr>
                    <th>{item.title}</th>
                    <th>{item.year}</th>
                    <th>{item.genere}</th>
                    <th>{item.director}</th>
                    <th>{item.actors}</th>
                </tr>
            ))}
          </ul>
        )}
      </div>
    );
  };
  
  export default ApiExample;
