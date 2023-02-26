import { Box, Grid, Stack, Typography } from "@mui/material";
import ChatList from "./ChatList";
import Conversations from "./Conversations";

function ChatMain() {
  return (
    <Box sx={{ mx: 5 }}>
      <Stack spacing={2}>
        <Grid container>
          <Grid item xs={12}>
            <Typography variant="h4">Chat</Typography>
          </Grid>
        </Grid>
        <Grid container px={1}>
          <Grid item xs={4}>
            <ChatList />
          </Grid>
          <Grid item xs={8}>
            <Conversations />
          </Grid>
        </Grid>
      </Stack>
    </Box>
  );
}

export default ChatMain;
