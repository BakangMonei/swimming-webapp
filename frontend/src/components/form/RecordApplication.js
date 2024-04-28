import React, { useState, useEffect, useRef } from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

const RecordApplication = () => {
  // State variables for form data and competitions
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [competitionName, setCompetitionName] = useState("");
  const [competitions, setCompetitions] = useState([]);
  const [filteredCompetitions, setFilteredCompetitions] = useState([]);

  const startDateRef = useRef(null);
const endDateRef = useRef(null);



  // Sample competition data (in a real application, you would fetch this from a server)
  const allCompetitions = [
    { name: "Competition 1", date: "2024-05-20" },
    { name: "Competition 2", date: "2024-06-10" },
    { name: "Competition 3", date: "2024-07-05" },
    // Add more competitions as needed
  ];

  // Function to filter competitions based on start and end date
  const filterCompetitions = () => {
    if (startDate && endDate) {
      const filtered = allCompetitions.filter((comp) => {
        const compDate = new Date(comp.date);
        return compDate >= new Date(startDate) && compDate <= new Date(endDate);
      });
      setFilteredCompetitions(filtered);
    } else {
      setFilteredCompetitions(allCompetitions);
    }
  };

  // Effect to filter competitions whenever startDate or endDate changes
  useEffect(() => {
    filterCompetitions();
  }, [startDate, endDate]);

  // Form submission handler
  const handleSubmit = (event) => {
    event.preventDefault();
    const startDate = startDateRef.current.value;
    const endDate = endDateRef.current.value;
    fetch(`/viewAthleteByDate?startDate=${startDate}&endDate=${endDate}`)
     .then(response => response.json())
     .then(data => {
        // Display the data to the user
        console.log(data);
        // You can also update the state or props with the received data
        // For example:
        // setAthletes(data);
      })
     .catch(error => {
        console.error(error);
      });
  };
  return (
    <Container className="d-flex justify-content-left">
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formGroupFirstname">
          <Form.Label>First Name</Form.Label>
          <Form.Control type="text" placeholder="Enter first name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupLastname">
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="text" placeholder="Enter last name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupLastname">
          <Form.Label> Email </Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupDOB">
          <Form.Label>Date of Birth</Form.Label>
          <Form.Control type="date" placeholder="Enter D.O.B" />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>Gender</Form.Label>
          <Form.Select>
            <option>Choose...</option>
            <option>Male</option>
            <option>Female</option>
          </Form.Select>
        </Form.Group>
        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>Club</Form.Label>
          <Form.Select>
            <option> Choose...</option>
            <option> Propellers Aquatic club</option>
            <option> KUBU Swimming Club</option>
            <option> Gaborone Aquatic Club</option>
            <option> BDF Dolphins</option>
            <option> UB Swimming Club</option>
            <option> KUBU Swimming Club</option>
            <option> KUBU Swimming Club</option>
            <option> KUBU Swimming Club</option>
            <option> KUBU Swimming Club</option>
            <option> KUBU Swimming Club</option>
          </Form.Select>
        </Form.Group>
        <Form.Group as={Col} controlId="formGridState">
          <Form.Label> Categories</Form.Label>
          <Form.Select>
            <option>Choose...</option>
            <option> Freestyle</option>
            <option> Backstroke</option>
            <option> Breaststroke</option>
            <option> Butterfly</option>
            <option> Medley</option>
            <option> Club relays</option>
            <option> Laps</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupStartDate">
          <Form.Label>Competition Start Date</Form.Label>
          <Form.Control
            type="date"
            placeholder="Enter start date"
            onChange={(e) => setStartDate(e.target.value)}
            ref={startDateRef}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupEndDate">
          <Form.Label>Competition End Date</Form.Label>
          <Form.Control
            type="date"
            placeholder="Enter end date"
            onChange={(e) => setEndDate(e.target.value)}
            ref={endDateRef}
          />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>Competition Name</Form.Label>
          <Form.Select
            value={competitionName}
            onChange={(e) => setCompetitionName(e.target.value)}
          >
            <option>Choose...</option>
            {filteredCompetitions.map((comp, index) => (
              <option key={index} value={comp.name}>
                {comp.name}
              </option>
            ))}
          </Form.Select>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default RecordApplication;
