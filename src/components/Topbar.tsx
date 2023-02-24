import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import colorConfigs from "../configs/colorConfigs";
import sizeConfigs from "../configs/sizeConfigs";

function Topbar() {
  return (
    <AppBar
      position="fixed"
      sx={{
        width: `calc(100% - ${sizeConfigs.sidebar.width})`,
        ml: sizeConfigs.sidebar.width,
        boxShadow: "unset",
        backgroundColor: colorConfigs.mainBg,
        color: colorConfigs.topbar.color,
      }}
    >
      <Toolbar>
        <Box sx={{ flexGrow: 1 }} />
        <Box sx={{ flexGrow: 0 }}>
          <Typography>topbar</Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Topbar;
