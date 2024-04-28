import React, { useState, useEffect } from "react";
import axios from "axios";
import { collection, getDocs } from "firebase/firestore";
import { firestore } from "../../firebase/firebase";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";

const RankingsTable = () => {

  const [athletes, setAthletes] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [athletesPerPage] = useState(10); // Number of athletes per page
  const [records, setRecords] = useState([]); // World records

  useEffect(() => {
    fetchAthletes();
  }, [currentPage]); // Fetch athletes whenever currentPage changes

  const fetchAthletes = async () => {
    try {
      const response = await axios.get("http://localhost:5000/viewAthlete");
      if (response.status === 200) {
        setRecords(response.data);
      } else {
        alert("Error fetching athletes");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error fetching athletes");
    }
  };

  const indexOfLastAthlete = currentPage * athletesPerPage;
  const indexOfFirstAthlete = indexOfLastAthlete - athletesPerPage;
  const currentAthletes = athletes.slice(
    indexOfFirstAthlete,
    indexOfLastAthlete
  );

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  
  // useEffect(() => {
  //   const fetchRecords = async () => {
  //     try {
  //       const recordsCollection = collection(firestore, "WorldRecords");
  //       const data = await getDocs(recordsCollection);
  //       const recordsArray = data.docs.map((doc) => ({
  //         id: doc.id,
  //         ...doc.data(),
  //       }));
  //       setRecords(recordsArray);
  //     } catch (error) {
  //       console.error("Error fetching records: ", error);
  //     }
  //   };

  //   fetchRecords();
  // }, []);

  const [records2, setRecords2] = useState([]); // Olympic records
  // useEffect(() => {
  //   const fetchOlympicRecords = async () => {
  //     try {
  //       const recordsCollection = collection(firestore, "OlympicRecords");
  //       const data = await getDocs(recordsCollection);
  //       const recordsArray = data.docs.map((doc) => ({
  //         id: doc.id,
  //         ...doc.data(),
  //       }));
  //       setRecords2(recordsArray);
  //     } catch (error) {
  //       console.error("Error fetching records: ", error);
  //     }
  //   };

  //   fetchOlympicRecords();
  // }, []);

  useEffect(() => {
    fetchAthletes2();
  }, [currentPage]); // Fetch athletes whenever currentPage changes

  const fetchAthletes2 = async () => {
    try {
      const response = await axios.get("http://localhost:5000/viewAthlete");
      if (response.status === 200) {
        setRecords2(response.data);
      } else {
        alert("Error fetching athletes");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error fetching athletes");
    }
  };

  
  return (
    <div className="mt-12 mb-8 flex flex-col gap-12">
      <Card>
        <CardHeader
          variant="gradient"
          color="gray"
          className=" mb-5 p-8 bg-black"
        >
          <Typography variant="h6" color="white">
            Freestyle
          </Typography>
        </CardHeader>
        <CardBody className="overflow-x-scroll px-0 pt-0 pb-10">
          <table className="w-full min-w-[640px] table-auto">
            <thead>
              <tr>
                {[
                  "Stroke",
                  "Athlete Name",
                  "Date Of Birth",
                  "Club",
                  "Record Date",
                  "Record Time",
                  "City",
                ].map((el) => (
                  <th
                    key={el}
                    className="border-b border-blue-gray-50 py-3 px-5 text-left"
                  >
                    <Typography
                      variant="small"
                      className="text-[11px] font-bold uppercase text-blue-gray-400"
                    >
                      {el}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {records.map((record) => (
                <tr key={record.id}>
                  <td className="border-b border-blue-gray-50 py-3 px-5 text-left">
                    {record.stroke}
                  </td>
                  <td className="border-b border-blue-gray-50 py-3 px-5 text-left">
                    {record.athletename}
                  </td>
                  <td className="border-b border-blue-gray-50 py-3 px-5 text-left">
                    {record.dob}
                  </td>
                  <td className="border-b border-blue-gray-50 py-3 px-5 text-left">
                    {record.club}
                  </td>
                  <td className="border-b border-blue-gray-50 py-3 px-5 text-left">
                    {record.recorddate}
                  </td>
                  <td className="border-b border-blue-gray-50 py-3 px-5 text-left">
                    {record.recordtime}
                  </td>
                  <td className="border-b border-blue-gray-50 py-3 px-5 text-left">
                    {record.city}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </CardBody>
      </Card>
      <Card>
        <CardHeader
          variant="gradient"
          color="gray"
          className=" mb-5 p-8 bg-black"
        >
          <Typography variant="h6" color="white">
            Backstroke
          </Typography>
        </CardHeader>
        <CardBody className="overflow-x-scroll px-0 pt-0 pb-10">
          <table className="w-full min-w-[640px] table-auto">
            <thead>
              <tr>
                {[
                  "Stroke",
                  "Athlete Name",
                  "Date Of Birth",
                  "Club",
                  "Record Date",
                  "Record Time",
                  "City",
                ].map((el2) => (
                  <th
                    key={el2}
                    className="border-b border-blue-gray-50 py-3 px-5 text-left"
                  >
                    <Typography
                      variant="small"
                      className="text-[11px] font-bold uppercase text-blue-gray-400"
                    >
                      {el2}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {records2.map((record) => (
                <tr key={record.id}>
                  <td className="border-b border-blue-gray-50 py-3 px-5 text-left">
                    {record.stroke}
                  </td>
                  <td className="border-b border-blue-gray-50 py-3 px-5 text-left">
                    {record.athletename}
                  </td>
                  <td className="border-b border-blue-gray-50 py-3 px-5 text-left">
                    {record.dob}
                  </td>
                  <td className="border-b border-blue-gray-50 py-3 px-5 text-left">
                    {record.club}
                  </td>
                  <td className="border-b border-blue-gray-50 py-3 px-5 text-left">
                    {record.recorddate}
                  </td>
                  <td className="border-b border-blue-gray-50 py-3 px-5 text-left">
                    {record.recordtime}
                  </td>
                  <td className="border-b border-blue-gray-50 py-3 px-5 text-left">
                    {record.city}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </CardBody>
      </Card>
    </div>
  );
};

export default RankingsTable;
