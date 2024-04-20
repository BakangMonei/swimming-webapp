import React, { useState, useEffect } from 'react';

const AthletesTable = () => {
    const [athletes, setAthletes] = useState([]);

    useEffect(() => {
        fetchAthletes();
    }, []);

    const fetchAthletes = async () => {
        try {
            const response = await fetch('http://localhost:5000/athletes');
            if (response.ok) {
                const data = await response.json();
                setAthletes(data);
            } else {
                alert('Error fetching athletes');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Error fetching athletes');
        }
    };

    return (
        <div>
            <h1>Athletes Table</h1>
            <table>
                <thead>
                    <tr>
                        <th>Module Leader Email</th>
                        <th>Module Leader Name</th>
                        <th>Student Email</th>
                        <th>Student ID Number</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Phone Number</th>
                        <th>Exam Room</th>
                        <th>Faculty</th>
                        <th>Module Name</th>
                        <th>Date and Time</th>
                    </tr>
                </thead>
                <tbody>
                    {athletes.map((athlete, index) => (
                        <tr key={index}>
                            <td>{athlete.moduleLeaderEmail}</td>
                            <td>{athlete.moduleLeaderName}</td>
                            <td>{athlete.studentEmail}</td>
                            <td>{athlete.studentIDNumber}</td>
                            <td>{athlete.firstName}</td>
                            <td>{athlete.lastName}</td>
                            <td>{athlete.phoneNumber}</td>
                            <td>{athlete.examRoom}</td>
                            <td>{athlete.faculty}</td>
                            <td>{athlete.moduleName}</td>
                            <td>{athlete.dateAndTime}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AthletesTable;
