import { useState } from "react";
import {
  Avatar,
  Badge,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import StyledOnlineBadge from "../../components/StyledOnlineBadge";
import { ChatData } from "../../models/chat";
import { isNamedExports } from "typescript";
interface ChatDataProps {
  data: ChatData[];
  setChat?: (value: ChatData) => void;
}

function ChatItem({ data, setChat }: ChatDataProps) {
  const [value, setValue] = useState(-1);
  let count = 0;

  const handleChat = (value: ChatData, index: number) => {
    if (setChat) {
      setChat(value);
    }
    setValue(index);
  };

  return (
    <>
      {data.map((item, index) => (
        <ListItem
          disablePadding
          key={index}
          sx={{
            mb: 1,
            pr: 1,
          }}
        >
          <ListItemButton
            onClick={() => handleChat(item, index)}
            selected={value === index ? true : false}
            sx={{
              bgcolor: "background.paper",
              borderRadius: 1,
              "& .MuiListItemIcon-root": {
                minWidth: 0,
              },
            }}
          >
            <ListItemIcon>
              <StyledOnlineBadge
                overlap="circular"
                anchorOrigin={{ vertical: "top", horizontal: "right" }}
                variant="dot"
              >
                <Avatar src={item.avatar} sx={{ width: 45, height: 45 }} />
              </StyledOnlineBadge>
            </ListItemIcon>
            <ListItemText sx={{ ml: 2 }}>
              <Typography variant="body1" fontWeight="bold">
                {item.name}
              </Typography>

              <Typography variant="body2" sx={{ color: "#9e9e9e" }}>
                {item.detailChat
                  .filter((item) => item.newContent == true)
                  .map((item, index, array) => {
                    if (array.length - 1 === index) {
                      return item.content;
                    }
                  })}
              </Typography>
            </ListItemText>
            <ListItemIcon
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end",
              }}
            >
              <Typography variant="body2">{item.day}</Typography>
              <Badge
                badgeContent={
                  item.detailChat.filter((item) => {
                    return item.newContent == true && item.type === false;
                  }).length
                }
                sx={{
                  "& .MuiBadge-badge": {
                    bgcolor: "#ff1744",
                  },
                  mt: 1,
                  mr: 1,
                  color: "#fff",
                }}
              />
            </ListItemIcon>
          </ListItemButton>
        </ListItem>
      ))}
    </>
  );
}

export default ChatItem;
