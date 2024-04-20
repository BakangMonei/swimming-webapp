import React, { useState, useEffect } from 'react';

const AthleteTable = () => {
    const [athleteData, setAthleteData] = useState([]);

    useEffect(() => {
        fetchAthleteData();
    }, []);

    const fetchAthleteData = async () => {
        try {
            const response = await fetch('http://localhost:3001/upload');
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            const data = await response.json();
            setAthleteData(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
        <div>
            <h2>Athlete Data</h2>
            <table>
                <thead>
                    <tr>
                        <th>Athlete</th>
                        <th>First</th>
                        <th>Last</th>
                        {/* Add more table headers as needed */}
                    </tr>
                </thead>
                <tbody>
                    {athleteData.map((athlete, index) => (
                        <tr key={index}>
                            <td>{athlete.athlete}</td>
                            <td>{athlete.first}</td>
                            <td>{athlete.last}</td>
                            {/* Add more table cells as needed */}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AthleteTable;
