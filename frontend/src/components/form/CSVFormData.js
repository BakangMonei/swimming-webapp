import React, { useState } from "react";

const CSVFormData = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async () => {
    if (!file) {
      alert("Please select a file");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch("http://localhost:5000/upload", {
        method: "POST",
        body: formData,
      });
      if (response.ok) {
        window.location.href = "http://localhost:3000/athletes";
      } else {
        alert("Error uploading file");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error uploading file");
    }
  };

  const handleSubmitAthletes = async () => {
    if (!file) {
      alert("Please select a file");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch("http://localhost:5000/uploadAthletics", {
        method: "POST",
        body: formData,
      });
      if (response.ok) {
        window.location.href = "http://localhost:3000/getAthletes";
      } else {
        alert("Error uploading file");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error uploading file");
    }
  };

  return (
    <div className="max-w-3xl mx-auto">
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-2">Upload CSV File</h1>
        <input
          type="file"
          accept=".csv"
          onChange={handleFileChange}
          className="mb-2"
        />
        <button
          onClick={handleSubmit}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Upload
        </button>
      </div>

      <div>
        <h1 className="text-2xl font-bold mb-2">Upload Athletes CSV File</h1>
        <input
          type="file"
          accept=".csv"
          onChange={handleFileChange}
          className="mb-2"
        />
        <button
          onClick={handleSubmitAthletes}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Upload
        </button>
      </div>
    </div>
  );
};

export default CSVFormData;
