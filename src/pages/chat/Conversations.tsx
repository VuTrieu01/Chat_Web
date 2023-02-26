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

function Conversations() {
  return (
    <>
      <Box
        sx={{
          mb: "0.3rem",
          mx: "20px",
          backgroundColor: colorConfigs.mainBg,
        }}
      >
        <Typography variant="body1" fontWeight="bold" sx={{ fontSize: 18 }}>
          Gold Coast
        </Typography>
        <Typography variant="body2" fontWeight="bold" color="#9e9e9e">
          From: Hali
        </Typography>
      </Box>
      <Divider sx={{ mx: "20px" }} />
      <List>
        <Scrollbar sx={{ height: "28.5rem", mr: "0.625rem" }}>
          <ListItem>
            <Grid
              container
              direction="column"
              justifyContent="flex-end"
              alignItems="flex-end"
            >
              <Grid item xs={12}>
                <ListItemText
                  primary="Hey man, What's up ?"
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
          <ListItem alignItems="flex-start">
            <ListItemIcon
              sx={{
                display: "flex",
                flexDirection: "column",
                mt: 0,
              }}
            >
              <Avatar
                alt="Cindy Baker"
                src="https://material-ui.com/static/images/avatar/2.jpg"
                sx={{ width: 45, height: 45 }}
              />
              <ListItemText secondary="09:31" />
            </ListItemIcon>
            <Grid
              container
              direction="column"
              justifyContent="flex-end"
              alignItems="flex-start"
            >
              <Grid item xs={12}>
                <ListItemText
                  primary="  Hey, I am Good! What about you ?"
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
          <ListItem>
            <Grid
              container
              direction="column"
              justifyContent="flex-end"
              alignItems="flex-end"
            >
              <Grid item xs={12}>
                <ListItemText
                  primary="Cool. i am good, let's catch up!"
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
          <ListItem>
            <Grid
              container
              direction="column"
              justifyContent="flex-end"
              alignItems="flex-end"
            >
              <Grid item xs={12}>
                <ListItemText
                  primary="Cool. i am good, let's catch up!"
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
          <ListItem>
            <Grid
              container
              direction="column"
              justifyContent="flex-end"
              alignItems="flex-end"
            >
              <Grid item xs={12}>
                <ListItemText
                  primary="Cool. i am good, let's catch up!"
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
          <ListItem>
            <Grid
              container
              direction="column"
              justifyContent="flex-end"
              alignItems="flex-end"
            >
              <Grid item xs={12}>
                <ListItemText
                  primary="Cool. i am good, let's catch up!"
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
          <ListItem>
            <Grid
              container
              direction="column"
              justifyContent="flex-end"
              alignItems="flex-end"
            >
              <Grid item xs={12}>
                <ListItemText
                  primary="Cool. i am good, let's catch up!"
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
          <ListItem>
            <Grid
              container
              direction="column"
              justifyContent="flex-end"
              alignItems="flex-end"
            >
              <Grid item xs={12}>
                <ListItemText
                  primary="Cool. i am good, let's catch up!"
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
          <ListItem>
            <Grid
              container
              direction="column"
              justifyContent="flex-end"
              alignItems="flex-end"
            >
              <Grid item xs={12}>
                <ListItemText
                  primary="Cool. i am good, let's catch up!"
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
            />
            <IconButton size="small">
              <FontAwesomeIcon icon={faPaperclip} />
            </IconButton>
            <IconButton
              size="small"
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
  );
}

export default Conversations;
