import { Box, Typography, Avatar } from "@mui/material";
import AssignmentIcon from "@mui/icons-material/Assignment";

const Header = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Avatar sx={{ m: "5px 0", bgcolor: "secondary.dark" }}>
        <AssignmentIcon sx={{ color: "common.lightestGray" }} />
      </Avatar>
      <Typography
        component="h2"
        sx={{
          textAlign: "center",
          fontSize: "15px",
          fontWeight: "bold",
          color: "common.darkGray",
          m: "5px 0",
        }}
      >
        Cadastre-se agora!!
      </Typography>
    </Box>
  );
};

export default Header;
