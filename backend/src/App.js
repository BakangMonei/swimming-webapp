const express = require('express');
const multer = require('multer');
const { Client } = require('pg');
const csv = require('csv-parser');
const fs = require('fs');

const app = express();
const PORT = 5000;

// Multer setup for file upload
const upload = multer({ dest: 'uploads/' });

// PostgreSQL connection setup
const client = new Client({
    database: 'mydatabase',
    port: 5432,
    host: 'localhost',
});

// Function to create the table if it doesn't exist
const createTableIfNotExists = async () => {
    try {
        await client.connect();
        await client.query(`
            CREATE TABLE IF NOT EXISTS dummyDB (
                moduleLeaderEmail VARCHAR(255),
                moduleLeaderName VARCHAR(255),
                studentEmail VARCHAR(255),
                studentIDNumber VARCHAR(255),
                firstName VARCHAR(255),
                lastName VARCHAR(255),
                phoneNumber VARCHAR(255),
                examRoom VARCHAR(255),
                faculty VARCHAR(255),
                moduleName VARCHAR(255),
                dateAndTime TIMESTAMP
            );
        `);
        console.log('Table created or already exists');
    } catch (error) {
        console.error('Error creating table:', error);
    }
};

createTableIfNotExists();

// File upload route
app.post('/upload', upload.single('file'), async (req, res) => {
    try {
        const results = [];

        fs.createReadStream(req.file.path)
            .pipe(csv())
            .on('data', (data) => results.push(data))
            .on('end', async () => {
                for (const result of results) {
                    await client.query(
                        `INSERT INTO dummyDB (
                            moduleLeaderEmail,
                            moduleLeaderName,
                            studentEmail,
                            studentIDNumber,
                            firstName,
                            lastName,
                            phoneNumber,
                            examRoom,
                            faculty,
                            moduleName,
                            dateAndTime
                        ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)`,
                        [
                            result.moduleLeaderEmail,
                            result.moduleLeaderName,
                            result.studentEmail,
                            result.studentIDNumber,
                            result.firstName,
                            result.lastName,
                            result.phoneNumber,
                            result.examRoom,
                            result.faculty,
                            result.moduleName,
                            result.dateAndTime,
                        ]
                    );
                }

                res.status(200).send('File uploaded successfully');
            });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('Internal server error');
    }
});

// Route to fetch athletes from database
app.get('/athletes', async (req, res) => {
    try {
        const queryResult = await client.query('SELECT * FROM dummyDB');
        res.status(200).json(queryResult.rows);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('Internal server error');
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
