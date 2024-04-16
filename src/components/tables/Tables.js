import React, { useState, useEffect } from 'react';

import { firestore } from '../../firebase/firebase'; // Import firestore instance




// Table component
const Table = ({ category }) => {
  const [data, setData] = useState([]);


  // Function to fetch data from Firestore based on category
const fetchDataFromFirestore = async (category) => {
  try {
    const querySnapshot = await getDocs(collection(firestore, category));
    const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

  useEffect(() => {
    fetchDataFromFirestore(category).then(result => {
      setData(result);
    }).catch(error => {
      console.error('Error fetching data:', error);
    });
  }, [category]);
  

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Firstname</th>
          <th>Lastname</th>
          <th>City</th>
          <th>Club</th>
          <th>DOB</th>
          <th>Record Date</th>
          <th>Record Time</th>
          <th>Stroke</th>
          {/* Add more headers as needed */}
        </tr>
      </thead>
      <tbody>
        {data.map(item => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.firstname}</td>
            <td>{item.lastname}</td>
            <td>{item.city}</td>
            <td>{item.club}</td>
            <td>{item.dob}</td>
            <td>{item.recordDate}</td>
            <td>{item.recordTime}</td>
            <td>{item.stroke}</td>
            {/* Render more columns based on your data structure */}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
