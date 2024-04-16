import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { firestore } from "../../firebase/firebase";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";

const RecordsTable = () => {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    const fetchRecords = async () => {
      try {
        const recordsCollection = collection(firestore, "records");
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

  return (
    <div className="mt-12 mb-8 flex flex-col gap-12">
      <Card>
        <CardHeader
          variant="gradient"
          color="gray"
          className=" mb-5 p-8 bg-black text-7xl"
        >
          <Typography variant="h6" color="white">
            Records Table
          </Typography>
        </CardHeader>
        <CardBody className="overflow-x-scroll px-0 pt-0 pb-10">
          <table className="w-full min-w-[640px] table-auto">
            <thead>
              <tr>
                {["Catalogue", "Men", "Women", "Last Changed"].map((el) => (
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
                    {record.catalogue}
                  </td>
                  <td className="border-b border-blue-gray-50 py-3 px-5 text-left">
                    {record.men}
                  </td>
                  <td className="border-b border-blue-gray-50 py-3 px-5 text-left">
                    {record.women}
                  </td>
                  <td className="border-b border-blue-gray-50 py-3 px-5 text-left">
                    {record.lastChanged}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </CardBody>
      </Card>
    </div>
  );
}

export default RecordsTable;
