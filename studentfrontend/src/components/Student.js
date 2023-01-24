import * as React from "react";
import { Box, TextField, Paper } from "@mui/material";
import { useState } from "react";

export default function Student() {
  const paperStyle = { padding: "50px 20px", width: 600, margin: "20px auto" };
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");

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
      </Box>
    </Paper>
  );
}
