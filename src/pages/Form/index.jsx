import { Container, CssBaseline, Fade, Box } from "@mui/material";
import CompleteForm from "../../components/CompleteForm";

const Form = () => {
  const fade = true;
  return (
    <Container
      component="main"
      sx={{
        boxSizing: "border-box",
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background:
          "radial-gradient(circle, rgba(238,174,202,1) 50%, rgba(148,187,233,1) 100%)",
      }}
    >
      <Fade in={fade} timeout={1500}>
        <Box>
          <CssBaseline />

          <CompleteForm />
        </Box>
      </Fade>
    </Container>
  );
};
export default Form;
