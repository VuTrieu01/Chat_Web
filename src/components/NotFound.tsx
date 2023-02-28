import { Box } from "@mui/material";

function NotFound() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        mt: 15,
      }}
    >
      <img
        src={
          "https://firebasestorage.googleapis.com/v0/b/order-drinks-594fe.appspot.com/o/404.png?alt=media&token=844fa662-f469-484c-acdf-acfc49f972fb"
        }
        loading="lazy"
        width="40%"
      />
    </Box>
  );
}

export default NotFound;
