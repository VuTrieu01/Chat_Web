import {
  Avatar,
  Badge,
  Box,
  IconButton,
  Tooltip,
  Typography,
} from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faCaretDown } from "@fortawesome/free-solid-svg-icons";
import ChatTopPage from "./ChatTopPage";
import ChatMainPage from "./ChatMainPage";

function ChatPage() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <ChatTopPage />
      <ChatMainPage />
    </Box>
  );
}

export default ChatPage;
