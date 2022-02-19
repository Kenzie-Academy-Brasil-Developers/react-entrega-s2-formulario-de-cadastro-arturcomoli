import { Box, Typography, Avatar } from "@mui/material";
import AssignmentIcon from "@mui/icons-material/Assignment";

const Header = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "5px 0",
      }}
    >
      <Avatar sx={{ bgcolor: "secondary.dark" }}>
        <AssignmentIcon sx={{ color: "common.lightestGray" }} />
      </Avatar>
      <Typography
        component="h2"
        sx={{
          mt: "10px",
          textAlign: "center",
          fontSize: "15px",
          fontWeight: "bold",
          color: "common.darkGray",
        }}
      >
        Cadastre-se agora!!
      </Typography>
    </Box>
  );
};

export default Header;
