import { Box, Typography } from "@mui/material";
import React from "react";

function BuildPage() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        mt: 6,
      }}
    >
      <img
        src={
          "https://firebasestorage.googleapis.com/v0/b/order-drinks-594fe.appspot.com/o/build.jpg?alt=media&token=b8edfba6-0be8-4e95-9ab4-6cc708eef575"
        }
        loading="lazy"
        width="50%"
      />
      <Typography variant="h3" color="#9e9e9e">
        PAGE UNDER CONSTRUCTION
      </Typography>
    </Box>
  );
}

export default BuildPage;
