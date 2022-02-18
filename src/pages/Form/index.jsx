import { Container, CssBaseline } from "@mui/material";
import CompleteForm from "../../components/CompleteForm";

const Main = () => {
  return (
    <Container
      component="main"
      sx={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "rgb(238,174,202);",
        background:
          "radial-gradient(circle, rgba(238,174,202,1) 50%, rgba(148,187,233,1) 100%)",
      }}
    >
      <CssBaseline />
      <CompleteForm />
    </Container>
  );
};
export default Main;
