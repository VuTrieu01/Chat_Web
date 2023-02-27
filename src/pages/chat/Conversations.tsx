import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFaceSmile,
  faPaperclip,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
import {
  Avatar,
  Box,
  Button,
  Divider,
  Grid,
  IconButton,
  InputBase,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import Scrollbar from "../../components/Scrollbar";
import colorConfigs from "../../configs/colorConfigs";
import { ChatData, DetailChat } from "../../models/chat";
interface ChatDataProps {
  data: ChatData | undefined;
}

function Conversations({ data }: ChatDataProps) {
  const [chats, setChats] = useState<any>();
  const [idUser, setIdUser] = useState(0);
  const [content, setContent] = useState("");

  const handleClick = (e: any) => {
    if (data !== undefined) {
      let chat = {
        idUser: data.id,
        content,
      };

      setChats(chat);
      setContent("");
    }
    localStorage.setItem("chat", "s");
  };

  useEffect(() => {
    // try {
    //   localStorage.setItem("chat", JSON.stringify(chats));
    // } catch (err) {
    //   console.log(err);
    // }
  }, [chats]);

  return (
    <>
      {data !== undefined ? (
        <>
          <Box
            sx={{
              mb: "0.3rem",
              mx: "20px",
              backgroundColor: colorConfigs.mainBg,
            }}
          >
            <Typography variant="body1" fontWeight="bold" sx={{ fontSize: 18 }}>
              {data.nickName}
            </Typography>
            <Typography variant="body2" fontWeight="bold" color="#9e9e9e">
              From: {data.name}
            </Typography>
          </Box>
          <Divider sx={{ mx: "20px" }} />
          <List sx={{ py: 0 }}>
            <Scrollbar sx={{ height: "28.5rem", mr: "0.625rem" }}>
              {data.detailChat.map((item, index) =>
                item.type === true ? (
                  <ListItem key={index}>
                    <Grid
                      container
                      direction="column"
                      justifyContent="flex-end"
                      alignItems="flex-end"
                    >
                      <Grid item xs={12}>
                        <ListItemText
                          primary={item.content}
                          sx={{
                            bgcolor: colorConfigs.chatpage.bgMe,
                            color: colorConfigs.chatpage.colorMe,
                            px: 2,
                            py: 1,
                            borderRadius: 6,
                            ml: 12,
                          }}
                        />
                      </Grid>
                    </Grid>
                  </ListItem>
                ) : (
                  <ListItem alignItems="flex-start" key={index}>
                    <ListItemIcon
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        mt: 0,
                      }}
                    >
                      <Avatar
                        src={data.avatar}
                        sx={{ width: 45, height: 45 }}
                      />
                      <ListItemText secondary={item.time} />
                    </ListItemIcon>
                    <Grid
                      container
                      direction="column"
                      justifyContent="flex-end"
                      alignItems="flex-start"
                    >
                      <Grid item xs={12}>
                        <ListItemText
                          primary={item.content}
                          sx={{
                            bgcolor: colorConfigs.chatpage.bgYou,
                            color: colorConfigs.chatpage.colorYou,
                            px: 2,
                            py: 1,
                            borderRadius: 6,
                            mr: 12,
                          }}
                        />
                      </Grid>
                    </Grid>
                  </ListItem>
                )
              )}
            </Scrollbar>
          </List>

          <Grid container spacing={1} sx={{ mx: "10px" }}>
            <Grid item xs={12}>
              <Stack spacing={1} direction="row">
                <Button
                  variant="outlined"
                  sx={{
                    color: colorConfigs.chatpage.colorYou,
                    border: " 1px solid #e0e0e0",
                    borderRadius: 6,
                    fontSize: 13,
                  }}
                >
                  Request Visit
                </Button>
                <Button
                  variant="outlined"
                  sx={{
                    color: colorConfigs.chatpage.colorYou,
                    border: " 1px solid #e0e0e0",
                    borderRadius: 6,
                    fontSize: 13,
                  }}
                >
                  Make Offer
                </Button>
              </Stack>
            </Grid>

            <Grid item xs={12}>
              <Paper
                variant="outlined"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  p: "0.3rem",
                  mr: "1.25rem",
                }}
              >
                <IconButton size="medium">
                  <FontAwesomeIcon icon={faFaceSmile} />
                </IconButton>
                <InputBase
                  sx={{ ml: 1, flex: 1 }}
                  placeholder="Type a message..."
                  maxRows={2}
                  multiline
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                />
                <IconButton size="small">
                  <FontAwesomeIcon icon={faPaperclip} />
                </IconButton>
                <IconButton
                  size="small"
                  onClick={handleClick}
                  sx={{
                    bgcolor: colorConfigs.chatpage.bgMe,
                    color: "background.paper",
                    p: 1,
                    borderRadius: "50%",
                    "&:hover": {
                      bgcolor: colorConfigs.chatpage.bgMe,
                      opacity: 0.7,
                    },
                  }}
                >
                  <FontAwesomeIcon icon={faPaperPlane} />
                </IconButton>
              </Paper>
            </Grid>
          </Grid>
        </>
      ) : (
        <Box sx={{ textAlign: "center" }}>
          <img
            src={
              "https://firebasestorage.googleapis.com/v0/b/order-drinks-594fe.appspot.com/o/chat.png?alt=media&token=3b1c2798-a6b4-4d06-8ece-c40fce6b2b64"
            }
            loading="lazy"
            width="65%"
          />
          <Typography variant="h3" color="#9e9e9e">
            SELECT THE CHAT
          </Typography>
        </Box>
      )}
    </>
  );
}

export default Conversations;
