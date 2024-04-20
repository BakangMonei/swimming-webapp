// server.js
const express = require('express');
const multer = require('multer');
const csvParser = require('csv-parser');
const { Pool } = require('pg');
const fs = require('fs');

const app = express();
const port = 3001;

// Enable CORS
app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

// PostgreSQL database configuration
const pool = new Pool({
    host: 'localhost',
    database: 'mydatabase',
    port: 5432,
});

// Multer configuration for file upload
const upload = multer({ dest: 'uploads/' });

// Create table if not exists
async function createTable() {
    const createTableQuery = `
        CREATE TABLE IF NOT EXISTS Athlete (
            Athlete VARCHAR(255),
            First VARCHAR(255),
            Last VARCHAR(255),
            Middle VARCHAR(255),
            Initial VARCHAR(255),
            Sex VARCHAR(10),
            Birth DATE,
            Age INTEGER,
            Class VARCHAR(255),
            ID_NO VARCHAR(255),
            Citizen VARCHAR(255),
            Inactive BOOLEAN,
            Pref VARCHAR(255),
            "Group" VARCHAR(255),  -- Quoted "Group" column name
            SubGr VARCHAR(255),
            WMGroup VARCHAR(255),
            WMSubGr VARCHAR(255),
            Team1 VARCHAR(255),
            Team2 VARCHAR(255),
            Team3 VARCHAR(255),
            Addr VARCHAR(255),
            City VARCHAR(255),
            State VARCHAR(255),
            ZIP VARCHAR(20),
            Cntry VARCHAR(255),
            DayP1 VARCHAR(20),
            EveP1 VARCHAR(20),
            FaxP1 VARCHAR(20),
            DayP2 VARCHAR(20),
            EveP2 VARCHAR(20),
            FaxP2 VARCHAR(20),
            MailTo VARCHAR(255),
            BCSSASwimmer BOOLEAN,
            BCSSADiver BOOLEAN,
            BCSSASyncro BOOLEAN,
            BCSSAPolo BOOLEAN,
            EMail VARCHAR(255),
            CellP1 VARCHAR(20),
            CellP2 VARCHAR(20),
            UseBoth BOOLEAN,
            EveP1P2 VARCHAR(20),
            CellP1P2 VARCHAR(20),
            EMail1P2 VARCHAR(255),
            EveP2P2 VARCHAR(20),
            CellP2P2 VARCHAR(20),
            EMail2P2 VARCHAR(255),
            CellAthlete VARCHAR(20),
            EMailAthlete VARCHAR(255),
            MedCondition VARCHAR(255),
            Medication VARCHAR(255),
            DoctorName VARCHAR(255),
            DoctorPhone VARCHAR(20),
            EmerContact VARCHAR(255),
            EmerPhone VARCHAR(20),
            MailTo2 VARCHAR(255),
            Addr2 VARCHAR(255),
            City2 VARCHAR(255),
            State2 VARCHAR(255),
            ZIP2 VARCHAR(20),
            Cntry2 VARCHAR(255),
            EMail2 VARCHAR(255),
            UseMailTo BOOLEAN,
            CusPrompt1 VARCHAR(255),
            CusValue1 VARCHAR(255),
            CusPrompt2 VARCHAR(255),
            CusValue2 VARCHAR(255),
            CusPrompt3 VARCHAR(255),
            CusValue3 VARCHAR(255),
            CusPrompt4 VARCHAR(255),
            CusValue4 VARCHAR(255),
            CusPrompt5 VARCHAR(255),
            CusValue5 VARCHAR(255),
            CusPrompt6 VARCHAR(255),
            CusValue6 VARCHAR(255),
            CusPrompt7 VARCHAR(255),
            CusValue7 VARCHAR(255),
            CusPrompt8 VARCHAR(255),
            CusValue8 VARCHAR(255)
        )
    `;
    try {
        await pool.query(createTableQuery);
        console.log('Table created successfully');
    } catch (error) {
        console.error('Error creating table:', error.stack);
    }
}

createTable();

// API endpoint to handle file upload
app.post('/upload', upload.single('csvFile'), (req, res) => {
    const csvFilePath = req.file.path;
    const results = [];

    fs.createReadStream(csvFilePath)
        .pipe(csvParser())
        .on('data', (data) => {
            results.push(data);
        })
        .on('end', () => {
            // Insert data into the database
            const insertQuery = 'INSERT INTO Athlete VALUES $1';
            pool.query(insertQuery, [results], (error, result) => {
                if (error) {
                    console.error('Error inserting data:', error.stack);
                    res.status(500).send('Error inserting data');
                } else {
                    console.log('Data inserted successfully');
                    res.status(200).send('Data inserted successfully');
                }
            });
        });
});

app.listen(port, () => {
    console.log(`Backend server listening at http://localhost:${port}`);
});