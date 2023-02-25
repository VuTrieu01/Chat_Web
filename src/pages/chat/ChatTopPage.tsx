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

function ChatTopPage() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
      }}
    >
      <Typography sx={{ minWidth: 90 }}>Status: Sale</Typography>
      <IconButton size="small">
        <FontAwesomeIcon icon={faCaretDown} />
      </IconButton>
      <Tooltip title="Account settings">
        <IconButton size="small" sx={{ mx: 8 }}>
          <Badge badgeContent={0} color="error">
            <FontAwesomeIcon icon={faBell} />
          </Badge>
        </IconButton>
      </Tooltip>
    </Box>
  );
}

export default ChatTopPage;
