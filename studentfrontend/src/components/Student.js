import * as React from "react";
import { Box, TextField, Paper, Button } from "@mui/material";
import { useState } from "react";

export default function Student() {
  const paperStyle = { padding: "50px 20px", width: 600, margin: "20px auto" };
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const student = { name, address };
    console.log(student.name + " " + student.address);

    fetch("http://localhost:8080/student/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(student),
    })
      .then(() => {
        console.log("New student has been added!");
        alert(
          "The student, " +
            student.name +
            ", with address " +
            address +
            " has been added successfully!"
        );
      })
      .catch(() => {
        console.log("ERROR: Failed to add student");
      });
  };

  return (
    <Paper elevation={3} style={paperStyle}>
      <h1 style={{ color: "#03a9f4" }}>Add Student</h1>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1 },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-basic"
          label="Student Name"
          variant="outlined"
          fullWidth
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <TextField
          id="outlined-basic"
          label="Student Address"
          variant="outlined"
          fullWidth
          value={address}
          onChange={(e) => {
            setAddress(e.target.value);
          }}
        />
        <Button variant="contained" color="success" onClick={handleSubmit}>
          Submit
        </Button>
      </Box>
    </Paper>
  );
}
