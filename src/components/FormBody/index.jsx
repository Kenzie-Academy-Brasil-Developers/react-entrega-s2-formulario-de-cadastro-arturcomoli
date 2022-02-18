import { Box, TextField, Button } from "@mui/material";
import Instructions from "../Instructions";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import Person from "@mui/icons-material/Person";
import PasswordIcon from "@mui/icons-material/Password";
import CheckIcon from "@mui/icons-material/Check";
const FormBody = () => {
  return (
    <Box
      component="form"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box sx={{ m: "5px 0", display: "flex", alignItems: "flex-end" }}>
        <Person sx={{ color: "action.active", mr: 1, my: 0.5 }} />
        <TextField
          label="Nome Completo"
          variant="standard"
          required
          size="small"
          sx={{ input: { color: "common.darkGray", fontSize: "15px" } }}
        />
      </Box>
      <Box sx={{ m: "5px 0", display: "flex", alignItems: "flex-end" }}>
        <AlternateEmailIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
        <TextField
          id="input-with-sx"
          label="E-mail"
          variant="standard"
          required
          size="small"
          sx={{ input: { color: "common.darkGray", fontSize: "15px" } }}
        />
      </Box>

      <Box sx={{ m: "5px 0", display: "flex", alignItems: "flex-end" }}>
        <PasswordIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
        <TextField
          id="input-with-sx"
          label="Senha"
          variant="standard"
          required
          size="small"
          sx={{ input: { color: "common.darkGray", fontSize: "15px" } }}
        />
      </Box>

      <Box sx={{ m: "5px 0", display: "flex", alignItems: "flex-end" }}>
        <CheckIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
        <TextField
          id="input-with-sx"
          label="Confirme sua senha"
          variant="standard"
          required
          size="small"
          sx={{ input: { color: "common.darkGray", fontSize: "15px" } }}
        />
      </Box>

      <Button
        sx={{
          m: "25px",
          bgcolor: "secondary.main",
          color: "common.lightestGray",
          ":hover": {
            bgcolor: "primary.light",
            color: "secondary.dark",
          },
        }}
      >
        Cadastrar
      </Button>
      <Instructions />
    </Box>
  );
};
export default FormBody;
