const express = require("express");
const multer = require("multer");
const { Client } = require("pg");
const csv = require("csv-parser");
const fs = require("fs");
const cors = require("cors"); // Import CORS middleware

const app = express();
const PORT = 5000;

// Enable CORS for all routes
app.use(cors());

// Multer setup for file upload
const upload = multer({ dest: "uploads/" });

// PostgreSQL connection setup
const client = new Client({
  database: "mydatabase",
  port: 5432,
  host: "localhost",
});

const client2 = new Client({
  database: "mydatabase",
  port: 5432,
  host: "localhost",
});

/********************************** Table 1 ***************************************/
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
    console.log("Table Test created or already exists");
  } catch (error) {
    console.error("Error creating table:", error);
  }
};

createTableIfNotExists();

// File upload route
app.post("/upload", upload.single("file"), async (req, res) => {
  try {
    const results = [];

    fs.createReadStream(req.file.path)
      .pipe(csv())
      .on("data", (data) => results.push(data))
      .on("end", async () => {
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

        res.status(200).send("File uploaded successfully");
      });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("Internal server error");
  }
});

// Route to fetch athletes from database
app.get("/athletes", async (req, res) => {
  try {
    const queryResult = await client.query("SELECT * FROM dummyDB");
    res.status(200).json(queryResult.rows);
  } catch (error) {
    console.error("Error fetching athletes:", error);
    res.status(500).send("Error fetching athletes");
  }
});
/********************************** End Of Table 1***************************************/

/************************************ Table 2*************************************/
const createTableAthletes= async () => {
  try {
    await client2.connect();
    await client2.query(`
            CREATE TABLE IF NOT EXISTS athletes (
                stroke VARCHAR(255),
                athleteName VARCHAR(255),
                dob VARCHAR(255),
                club VARCHAR(255),
                recordDate VARCHAR(255),
                recordTime VARCHAR(255),
                city VARCHAR(255)
            );
        `);
    console.log("Table Athletes created or already exists");
  } catch (error) {
    console.error("Error creating table:", error);
  }
};

createTableAthletes();

// File upload route
app.post("/uploadAthlete", upload.single("file"), async (req, res) => {
  try {
    const results = [];

    fs.createReadStream(req.file.path)
      .pipe(csv())
      .on("data", (data) => results.push(data))
      .on("end", async () => {
        for (const result of results) {
          await client2.query(
            `INSERT INTO athletes (
                            stroke,
                            athleteName,
                            dob,
                            club,
                            recordDate,
                            recordTime,
                            city
                        ) VALUES ($1, $2, $3, $4, $5, $6, $7)`,
            [
              result.stroke,
              result.athleteName,
              result.dob,
              result.club,
              result.recordDate,
              result.recordTime,
              result.city,
            ]
          );
        }

        res.status(200).send("File uploaded successfully");
      });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("Internal server error");
  }
});

// Route to fetch athletes from database
app.get("/viewAthlete", async (req, res) => {
  try {
    const queryResult = await client.query("SELECT * FROM athletes");
    res.status(200).json(queryResult.rows);
  } catch (error) {
    console.error("Error fetching athletes:", error);
    res.status(500).send("Error fetching athletes");
  }
});

/************************************ End Of Table 2*************************************/


/*************************************** VIEW ATHELETES BY DATE**********************************************/
// Route to fetch athletes by record date
app.get("/viewAthleteByDate", async (req, res) => {
  try {
    const startDate = req.query.startDate;
    const endDate = req.query.endDate;
    const queryResult = await client2.query(`
      SELECT * FROM athletes
      WHERE recordDate >= $1 AND recordDate <= $2
    `, [startDate, endDate]);
    res.status(200).json(queryResult.rows);
  } catch (error) {
    console.error("Error fetching athletes by date:", error);
    res.status(500).send("Error fetching athletes by date");
  }
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
