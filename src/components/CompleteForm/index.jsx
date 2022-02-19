import { Box } from "@mui/material";
import Header from "../Header";
import FormBody from "../FormBody";

const CompleteForm = () => {
  return (
    <Box
      sx={{
        // display: "flex",
        // flexDirection: "column",
        border: "1px solid rgba(123,31,162,0.50)",
        borderRadius: "15px",
        width: "100%",
        maxWidth: "300px",
        margin: "0 auto",
        padding: "10px 20px",
        bgcolor: "rgba(148, 187, 233, 0.25)",
        boxSizing: "border-box",
        // height: "90%",
        boxShadow: "0px 3px 15px -3px #7B1FA2",

        // maxHeight: "350px",
      }}
    >
      <Header />
      <FormBody />
    </Box>
  );
};
export default CompleteForm;
