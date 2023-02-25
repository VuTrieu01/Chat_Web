import React, { useState } from "react";
import { Avatar, Drawer, Stack, Typography, Tab, Tabs } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import sizeConfigs from "../configs/sizeConfigs";
import colorConfigs from "../configs/colorConfigs";
import routesConfig from "../routes/Routes";

function Sidebar() {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: sizeConfigs.sidebar.width,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: sizeConfigs.sidebar.width,
          boxSizing: "border-box",
          borderRight: "0px",
          backgroundColor: colorConfigs.sidebar.bg,
          color: colorConfigs.sidebar.color,
        },
      }}
    >
      <Stack alignItems="center" spacing={2} sx={{ my: 5 }}>
        <Avatar
          alt="Remy Sharp"
          src="https://material-ui.com/static/images/avatar/1.jpg"
          sx={{ width: 56, height: 56, border: 2.5, borderColor: "#fff" }}
        />
        <Typography
          variant="subtitle2"
          sx={{
            fontWeight: "bold",
            color: colorConfigs.sidebar.avatarName,
            cursor: "pointer",
          }}
        >
          Jimi Hendrix <FontAwesomeIcon icon={faChevronDown} />
        </Typography>
      </Stack>
      <Tabs
        orientation="vertical"
        value={value}
        onChange={handleChange}
        sx={{
          borderRight: 1,
          borderColor: "divider",
          "& .MuiTabs-indicator": {
            left: 0,
            width: 3,
          },
          "& .MuiButtonBase-root": {
            justifyContent: "flex-start",
            pl: 5,
            mb: 2,
          },
          ".css-h0q0iv-MuiButtonBase-root-MuiTab-root>.MuiTab-iconWrapper": {
            mr: 2,
          },
          ".css-h0q0iv-MuiButtonBase-root-MuiTab-root": {
            minHeight: "50px",
          },
        }}
      >
        {routesConfig.map((route, index) => (
          <Tab
            component={Link}
            to={route.path ? route.path : "/"}
            iconPosition="start"
            icon={route.sidebarProps?.icon}
            label={route.sidebarProps?.displayText}
          />
        ))}
      </Tabs>
    </Drawer>
  );
}

export default Sidebar;
