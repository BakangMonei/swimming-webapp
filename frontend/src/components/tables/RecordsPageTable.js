import React, { useState, useEffect } from "react";
import axios from "axios";

const RecordsPageTable = () => {
  const [athletes, setAthletes] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [athletesPerPage] = useState(10); // Number of athletes per page

  useEffect(() => {
    fetchAthletes();
  }, [currentPage]); // Fetch athletes whenever currentPage changes

  const fetchAthletes = async () => {
    try {
      const response = await axios.get("http://localhost:5000/viewAthlete");
      if (response.status === 200) {
        setAthletes(response.data);
      } else {
        alert("Error fetching athletes");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error fetching athletes");
    }
  };

  // Calculate indexes for pagination
  const indexOfLastAthlete = currentPage * athletesPerPage;
  const indexOfFirstAthlete = indexOfLastAthlete - athletesPerPage;
  const currentAthletes = athletes.slice(
    indexOfFirstAthlete,
    indexOfLastAthlete
  );

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="p-4 border rounded-xl">
      <h1 className="font-bold text-3xl text-center p-4">Rankings Table</h1>

      <table className="w-full">
        <thead className="text-center border">
          <tr>
            <th className="border p-2">Stroke</th>
            <th className="border p-2">Athlete Name</th>
            <th className="border p-2">Date Of Birth</th>
            <th className="border p-2">Club</th>
            <th className="border p-2">Record Date</th>
            <th className="border p-2">Record Time</th>
            <th className="border p-2">City</th>
          </tr>
        </thead>
        <tbody className="text-center border">
          {currentAthletes.map((athlete, index) => (
            <tr key={index}>
              <td className="border p-2">{athlete.stroke}</td>
              <td className="border p-2">{athlete.athletename}</td>
              <td className="border p-2">{athlete.dob}</td>
              <td className="border p-2">{athlete.club}</td>
              <td className="border p-2">{athlete.recorddate}</td>
              <td className="border p-2">{athlete.recordtime}</td>
              <td className="border p-2">{athlete.city}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination buttons */}
      <div className="flex justify-center mt-4">
        {[...Array(Math.ceil(athletes.length / athletesPerPage)).keys()].map(
          (number) => (
            <button
              key={number}
              onClick={() => paginate(number + 1)}
              className="mx-1 px-3 py-1 bg-blue-500 text-white rounded-md"
            >
              {number + 1}
            </button>
          )
        )}
      </div>
    </div>
  );
};

export default RecordsPageTable;
