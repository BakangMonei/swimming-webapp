import React, { useState }  from "react";

const CSVFormData = () => {

    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (e) => {
        setSelectedFile(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('csvFile', selectedFile);
    
        try {
            const response = await fetch('http://localhost:3001/upload', {
                method: 'POST',
                body: formData
            });
            if (!response.ok) {
                throw new Error('Upload failed');
            }
            alert('File uploaded successfully!');
        } catch (error) {
            console.error('Upload error:', error);
            alert('Upload failed');
        }
    };
    

    return (
        <div className="max-w-md mx-auto p-4 bg-white shadow-md rounded-md">
            <h2 className="text-lg font-semibold mb-4">Upload CSV File</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <input
                        type="file"
                        name="csvFile"
                        className="border-gray-300 border w-full p-2 rounded-md"
                        accept=".csv"
                        onChange={handleFileChange}
                        required
                    />
                </div>
                <div>
                    <button
                        type="submit"
                        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                    >
                        Upload
                    </button>
                </div>
            </form>
        </div>
    );
}


export default CSVFormData;