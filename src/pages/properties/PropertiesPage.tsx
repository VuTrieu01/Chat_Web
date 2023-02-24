import { Box, Typography } from "@mui/material";
import { TabPages } from "../../models";

interface TabPagesProps {
  props: TabPages;
}

function PropertiesPage({ props }: TabPagesProps) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

export default PropertiesPage;
