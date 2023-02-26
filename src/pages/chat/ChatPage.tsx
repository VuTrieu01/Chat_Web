import { Box } from "@mui/material";
import ChatTop from "./ChatTop";
import ChatMain from "./ChatMain";

function ChatPage() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <ChatTop />
      <ChatMain />
    </Box>
  );
}

export default ChatPage;
