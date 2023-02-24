import { Toolbar } from "@mui/material";
import Box from "@mui/material/Box";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import colorConfigs from "../configs/colorConfigs";
import sizeConfigs from "../configs/sizeConfigs";

function MainLayout() {
  return (
    <Box sx={{ display: "flex" }}>
      <Topbar />
      <Box
        component="nav"
        sx={{
          width: sizeConfigs.sidebar.width,
          flexShrink: 0,
          backgroundColor: colorConfigs.sidebar.bg,
        }}
      >
        <Sidebar />
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: `calc(100% - ${sizeConfigs.sidebar.width})`,
          height: "100%",
          backgroundColor: colorConfigs.mainBg,
        }}
      >
        <Toolbar />
      </Box>
    </Box>
  );
}

export default MainLayout;
