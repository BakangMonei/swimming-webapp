import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AthletesTable = () => {
    const [athletes, setAthletes] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [athletesPerPage] = useState(10); // Number of athletes per page

    useEffect(() => {
        fetchAthletes();
    }, [currentPage]); // Fetch athletes whenever currentPage changes

    const fetchAthletes = async () => {
        try {
            const response = await axios.get('http://localhost:5000/athletes');
            if (response.status === 200) {
                setAthletes(response.data);
            } else {
                alert('Error fetching athletes');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Error fetching athletes');
        }
    };

    // Calculate indexes for pagination
    const indexOfLastAthlete = currentPage * athletesPerPage;
    const indexOfFirstAthlete = indexOfLastAthlete - athletesPerPage;
    const currentAthletes = athletes.slice(indexOfFirstAthlete, indexOfLastAthlete);

    // Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div className='p-4 border rounded-xl'>
            <h1 className='font-bold text-3xl text-center p-4'>Athletes Table</h1>
            <table className='w-full'>
                <thead className='text-center border'>
                    <tr>
                        <th className='border p-2'>Module Leader Email</th>
                        <th className='border p-2'>Module Leader Name</th>
                        <th className='border p-2'>Student Email</th>
                        <th className='border p-2'>Student ID Number</th>
                        <th className='border p-2'>First Name</th>
                        <th className='border p-2'>Last Name</th>
                        <th className='border p-2'>Phone Number</th>
                        <th className='border p-2'>Exam Room</th>
                        <th className='border p-2'>Faculty</th>
                        <th className='border p-2'>Module Name</th>
                        <th className='border p-2'>Date and Time</th>
                    </tr>
                </thead>
                <tbody className='text-center border'>
                    {currentAthletes.map((athlete, index) => (
                        <tr key={index}>
                            <td className='border p-2'>{athlete.moduleleaderemail}</td>
                            <td className='border p-2'>{athlete.moduleleadername}</td>
                            <td className='border p-2'>{athlete.studentemail}</td>
                            <td className='border p-2'>{athlete.studentidnumber}</td>
                            <td className='border p-2'>{athlete.firstname}</td>
                            <td className='border p-2'>{athlete.lastname}</td>
                            <td className='border p-2'>{athlete.phonenumber}</td>
                            <td className='border p-2'>{athlete.examroom}</td>
                            <td className='border p-2'>{athlete.faculty}</td>
                            <td className='border p-2'>{athlete.modulename}</td>
                            <td className='border p-2'>{athlete.dateandtime}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {/* Pagination buttons */}
            <div className='flex justify-center mt-4'>
                {[...Array(Math.ceil(athletes.length / athletesPerPage)).keys()].map((number) => (
                    <button key={number} onClick={() => paginate(number + 1)} className='mx-1 px-3 py-1 bg-blue-500 text-white rounded-md'>
                        {number + 1}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default AthletesTable;
