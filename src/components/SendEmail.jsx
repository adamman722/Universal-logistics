import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import { Typewriter } from "react-simple-typewriter";

function SendEmail() {
  const handleType = (count) => {
    // access word count number
    console.log(count);
  };

  const handleDone = () => {
    console.log(`Done after 5 loops!`);
  };
  return (
    <Box
      sx={{
        height: "85vh",
        width: "60vw",
        margin: "0",
        padding: "10px",
        fontSize: "5rem",
      }}
    >
      <Typewriter
        words={[
          "Email service is currently unavailable...We promise to get it working soon!",
          "We hope you have a great day!",
        ]}
        cursor
        loop={5}
        cursorStyle="|"
        typeSpeed={50}
        deleteSpeed={50}
        delaySpeed={1500}
      />
    </Box>
  );
}

export default SendEmail;
