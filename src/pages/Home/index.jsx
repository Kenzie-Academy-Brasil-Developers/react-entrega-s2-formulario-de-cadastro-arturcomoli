import {
  Fade,
  Container,
  Typography,
  Button,
  Box,
  Avatar,
} from "@mui/material";
import { Redirect } from "react-router-dom";
import { useHistory, useParams } from "react-router-dom";
import toast from "react-hot-toast";

const Home = () => {
  const { name } = useParams();
  const test = localStorage.getItem("name");
  const fade = true;

  const history = useHistory();
  const handleBack = () => {
    history.push("/");
    toast.success("Retornou ao cadastro com sucesso!");
  };

  const handleLogout = () => {
    localStorage.clear();
    history.push("/");
    toast.success("Logout realizado com sucesso!");
  };

  if (name !== test) {
    return <Redirect to="/" />;
  }

  return (
    <Container
      component="main"
      maxWidth="xl"
      sx={{
        boxSizing: "border-box",
        height: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background:
          "radial-gradient(circle, rgba(238,174,202,1) 50%, rgba(148,187,233,1) 100%)",
      }}
    >
      <Fade in={fade} timeout={1500}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            alignItems: "center",
            minHeight: "250px",
          }}
        >
          <Avatar
            src="/broken-image.jpg"
            sx={{ width: "80px", height: "80px" }}
          />
          <Typography>Olá, {name}</Typography>
          <Box>
            <Button
              onClick={handleBack}
              sx={{
                m: "0 10px",
                bgcolor: "secondary.main",
                color: "common.lightestGray",
                ":hover": {
                  bgcolor: "primary.light",
                  color: "secondary.dark",
                },
              }}
            >
              Voltar
            </Button>
            <Button
              onClick={handleLogout}
              sx={{
                m: "0 10px",
                bgcolor: "secondary.main",
                color: "common.lightestGray",
                ":hover": {
                  bgcolor: "primary.light",
                  color: "secondary.dark",
                },
              }}
            >
              Deslogar
            </Button>
          </Box>
        </Box>
      </Fade>
    </Container>
  );
};

export default Home;
