import {
  Avatar,
  Box,
  Divider,
  Fab,
  Grid,
  IconButton,
  InputBase,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import colorConfigs from "../../configs/colorConfigs";

function ChatMainPage() {
  return (
    <Box sx={{ flexGrow: 1, mx: 5 }}>
      <Stack spacing={2}>
        <Grid container>
          <Grid item xs={12}>
            <Typography variant="h4">Chat</Typography>
          </Grid>
        </Grid>
        <Grid container px={1}>
          <Grid item xs={4}>
            <Grid item xs={12} sx={{ py: "10px" }}>
              <Paper
                sx={{
                  p: "2px 4px",
                  display: "flex",
                  alignItems: "center",
                  backgroundColor: colorConfigs.mainBg,
                  border: "1px solid #ccc",
                }}
              >
                <IconButton sx={{ p: "10px" }}>
                  <FontAwesomeIcon icon={faMagnifyingGlass} />
                </IconButton>
                <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Search" />
              </Paper>
            </Grid>
            <Divider />
            <List
              sx={{
                my: "10px",
                width: "100%",
                maxWidth: 450,
                bgcolor: "background.paper",
                position: "relative",
                overflow: "auto",
                maxHeight: 300,
              }}
            >
              <ListItem button key="Alice">
                <ListItemIcon>
                  <Avatar
                    alt="Alice"
                    src="https://material-ui.com/static/images/avatar/3.jpg"
                  />
                </ListItemIcon>
                <ListItemText primary="Alice">Alice</ListItemText>
              </ListItem>
              <ListItem button key="Alice">
                <ListItemIcon>
                  <Avatar
                    alt="Alice"
                    src="https://material-ui.com/static/images/avatar/3.jpg"
                  />
                </ListItemIcon>
                <ListItemText primary="Alice">Alice</ListItemText>
              </ListItem>
              <ListItem button key="Alice">
                <ListItemIcon>
                  <Avatar
                    alt="Alice"
                    src="https://material-ui.com/static/images/avatar/3.jpg"
                  />
                </ListItemIcon>
                <ListItemText primary="Alice">Alice</ListItemText>
              </ListItem>
              <ListItem button key="Alice">
                <ListItemIcon>
                  <Avatar
                    alt="Alice"
                    src="https://material-ui.com/static/images/avatar/3.jpg"
                  />
                </ListItemIcon>
                <ListItemText primary="Alice">Alice</ListItemText>
              </ListItem>
              <ListItem button key="Alice">
                <ListItemIcon>
                  <Avatar
                    alt="Alice"
                    src="https://material-ui.com/static/images/avatar/3.jpg"
                  />
                </ListItemIcon>
                <ListItemText primary="Alice">Alice</ListItemText>
              </ListItem>
              <ListItem button key="Alice">
                <ListItemIcon>
                  <Avatar
                    alt="Alice"
                    src="https://material-ui.com/static/images/avatar/3.jpg"
                  />
                </ListItemIcon>
                <ListItemText primary="Alice">Alice</ListItemText>
              </ListItem>
              <ListItem button key="CindyBaker">
                <ListItemIcon>
                  <Avatar
                    alt="Cindy Baker"
                    src="https://material-ui.com/static/images/avatar/2.jpg"
                  />
                </ListItemIcon>
                <ListItemText primary="Cindy Baker">Cindy Baker</ListItemText>
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={8}>
            <List>
              <ListItem key="1">
                <Grid container>
                  <Grid item xs={12}>
                    <ListItemText primary="Hey man, What's up ?"></ListItemText>
                  </Grid>
                  <Grid item xs={12}>
                    <ListItemText secondary="09:30"></ListItemText>
                  </Grid>
                </Grid>
              </ListItem>
              <ListItem key="2">
                <Grid container>
                  <Grid item xs={12}>
                    <ListItemText primary="Hey, Iam Good! What about you ?"></ListItemText>
                  </Grid>
                  <Grid item xs={12}>
                    <ListItemText secondary="09:31"></ListItemText>
                  </Grid>
                </Grid>
              </ListItem>
              <ListItem key="3">
                <Grid container>
                  <Grid item xs={12}>
                    <ListItemText primary="Cool. i am good, let's catch up!"></ListItemText>
                  </Grid>
                  <Grid item xs={12}>
                    <ListItemText secondary="10:30"></ListItemText>
                  </Grid>
                </Grid>
              </ListItem>
            </List>
            <Divider />
            <Grid container style={{ padding: "20px" }}>
              <Grid item xs={11}>
                <TextField
                  id="outlined-basic-email"
                  label="Type Something"
                  fullWidth
                />
              </Grid>
              <Grid xs={1}>
                <Fab color="primary" aria-label="add"></Fab>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Stack>
    </Box>
  );
}

export default ChatMainPage;
