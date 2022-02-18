import { Box } from "@mui/material";
import Header from "../Header";
import FormBody from "../FormBody";

const CompleteForm = () => {
  return (
    <Box
      sx={{
        border: "1px solid #7b1fa2",
        borderRadius: "15px",
        width: "100%",
        maxWidth: "300px",
        margin: "0 auto",
        padding: "30px",
        bgcolor: "rgba(148, 187, 233, 0.25)",
      }}
    >
      <Header />
      <FormBody />
    </Box>
  );
};
export default CompleteForm;
