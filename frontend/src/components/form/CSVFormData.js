import React, { useState } from 'react';

const CSVFormData = () => {
    const [file, setFile] = useState(null);

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleSubmit = async () => {
        if (!file) {
            alert('Please select a file');
            return;
        }

        const formData = new FormData();
        formData.append('file', file);

        try {
            const response = await fetch('http://localhost:5000/upload', {
                method: 'POST',
                body: formData,
            });
            if (response.ok) {
                window.location.href = 'http://localhost:3000/athletes';
            } else {
                alert('Error uploading file');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Error uploading file');
        }
    };

    return (
        <div>
            <h1>Upload CSV File</h1>
            <input type="file" accept=".csv" onChange={handleFileChange} />
            <button onClick={handleSubmit}>Upload</button>
        </div>
    );
};

export default CSVFormData;
