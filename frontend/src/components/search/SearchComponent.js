import React, { useState } from "react";
import { firestore } from "../../firebase/firebase"; // Assuming you have firebase.js in the same directory

const SearchComponent = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    const allDatabases = ["OlympicRecords", "WorldRecords", "database3"]; // Add your database names here
    const results = [];

    // Loop through each database to perform search
    for (const db of allDatabases) {
      try {
        const querySnapshot = await firestore
          .collection(db)
          .where("firstname", "==", searchTerm) // Modify to your field and condition
          .get();

        querySnapshot.forEach((doc) => {
          results.push({ id: doc.id, ...doc.data() });
        });
      } catch (error) {
        console.error("Error searching database", error);
      }
    }

    setSearchResults(results);
  };

  return (
    <div className="flex justify-start items-center py-7 relative">
      <input
        className="text-sm leading-none text-left text-gray-600 px-4 py-3 w-3/5 border rounded border-gray-300 outline-none"
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <svg
        className="absolute right-1 z-10 cursor-pointer"
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        onClick={handleSearch}
      >
        <path
          d="M10 17C13.866 17 17 13.866 17 10C17 6.13401 13.866 3 10 3C6.13401 3 3 6.13401 3 10C3 13.866 6.13401 17 10 17Z"
          stroke="#4B5563"
          strokeWidth="1.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M21 21L15 15"
          stroke="#4B5563"
          strokeWidth="1.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      {/* Render search results */}
      <div>
        {searchResults.map((result) => (
          <div key={result.id}>
            {/* Render your search results here */}
            <p>{result.someField}</p> {/* Example: Modify to your field */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchComponent;
