import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { firestore } from "../../firebase/firebase";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";

const RankingsTable = () => {
  const [records, setRecords] = useState([]); // World records
  useEffect(() => {
    const fetchRecords = async () => {
      try {
        const recordsCollection = collection(firestore, "WorldRecords");
        const data = await getDocs(recordsCollection);
        const recordsArray = data.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setRecords(recordsArray);
      } catch (error) {
        console.error("Error fetching records: ", error);
      }
    };

    fetchRecords();
  }, []);

  const [records2, setRecords2] = useState([]); // Olympic records
  useEffect(() => {
    const fetchOlympicRecords = async () => {
      try {
        const recordsCollection = collection(firestore, "OlympicRecords");
        const data = await getDocs(recordsCollection);
        const recordsArray = data.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setRecords2(recordsArray);
      } catch (error) {
        console.error("Error fetching records: ", error);
      }
    };

    fetchOlympicRecords();
  }, []);

  return (
    <div className="mt-12 mb-8 flex flex-col gap-12">
      <Card>
        <CardHeader
          variant="gradient"
          color="gray"
          className=" mb-5 p-8 bg-black"
        >
          <Typography variant="h6" color="white">
            World Records
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
                    {record.firstname} {record.lastname}
                  </td>
                  <td className="border-b border-blue-gray-50 py-3 px-5 text-left">
                    {record.dob}
                  </td>
                  <td className="border-b border-blue-gray-50 py-3 px-5 text-left">
                    {record.club}
                  </td>
                  <td className="border-b border-blue-gray-50 py-3 px-5 text-left">
                    {record.recordDate}
                  </td>
                  <td className="border-b border-blue-gray-50 py-3 px-5 text-left">
                    {record.recordTime}
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
            Olympic Records
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
                    {record.firstname} {record.lastname}
                  </td>
                  <td className="border-b border-blue-gray-50 py-3 px-5 text-left">
                    {record.dob}
                  </td>
                  <td className="border-b border-blue-gray-50 py-3 px-5 text-left">
                    {record.club}
                  </td>
                  <td className="border-b border-blue-gray-50 py-3 px-5 text-left">
                    {record.recordDate}
                  </td>
                  <td className="border-b border-blue-gray-50 py-3 px-5 text-left">
                    {record.recordTime}
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
