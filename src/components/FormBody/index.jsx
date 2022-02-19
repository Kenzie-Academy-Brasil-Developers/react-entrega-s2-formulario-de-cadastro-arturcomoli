import { Box, TextField, Button, Checkbox, Typography } from "@mui/material";
import Instructions from "../Instructions";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import Person from "@mui/icons-material/Person";
import PasswordIcon from "@mui/icons-material/Password";
import CheckIcon from "@mui/icons-material/Check";
// ------------ import forms ------------ //
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useHistory } from "react-router-dom";
import { useState } from "react";

import toast from "react-hot-toast";

const FormBody = () => {
  const [, setUser] = useState([]);
  const local = localStorage.getItem("name");
  const schema = yup.object().shape({
    name: yup
      .string()
      .required("Campo obrigatório")
      .matches(
        /^[A-zÀ-ú]*([A-z-À-ú ]*[A-z-À-ú])$/,
        "Nome fora do padrão requerido"
      ),
    email: yup
      .string()
      .email("E-mail fora do padrão")
      .required("Campo obrigatório"),
    password: yup
      .string()
      .required("Campo obrigatório")
      .matches(
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/,
        "Senha fora do padrão forte"
      ),
    password_confirm: yup
      .string()
      .required("Campo obrigatório")
      .oneOf(
        [yup.ref("password")],
        "A senha deve ser a mesma do campo anterior"
      ),
    acceptTerms: yup.bool().oneOf([true], "Aceitar termos para continuar"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const history = useHistory();

  const handleRegister = (data) => {
    localStorage.clear();
    delete data.password_confirm;
    delete data.acceptTerms;
    setUser(data);
    localStorage.setItem("name", data.name);
    toast.success("Usuário cadastrado!");
    history.push(`/home/${data.name}`);
  };

  const handleLogin = () => {
    if (local !== null) {
      toast.success("Entrou em sessão já iniciada!");
      history.push(`/home/${local}`);
    } else {
      toast.error("Sessão não iniciada!");
    }
  };

  return (
    <Box
      onSubmit={handleSubmit(handleRegister)}
      component="form"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", m: "6px 0" }}>
        <Person sx={{ color: "action.active", mr: 1, my: 0.5 }} />
        <TextField
          autoComplete="off"
          type="text"
          {...register("name")}
          label="Nome Completo"
          variant="filled"
          size="small"
          sx={{
            input: {
              color: "common.darkGray",
              fontSize: "15px",
              height: "10px",
            },
            label: { fontSize: "10px" },
          }}
          helperText={errors.name ? errors.name.message : " "}
          error={!!errors.name?.message}
          FormHelperTextProps={{
            style: {
              marginTop: "2px",
              fontSize: "8px",
            },
          }}
        />
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", m: "6px 0" }}>
        <AlternateEmailIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
        <TextField
          autoComplete="off"
          type="email"
          {...register("email")}
          label="E-mail"
          variant="filled"
          size="small"
          sx={{
            input: {
              color: "common.darkGray",
              fontSize: "15px",
              height: "10px",
            },
            label: { fontSize: "10px" },
          }}
          helperText={errors.email ? errors.email.message : " "}
          error={!!errors.email?.message}
          FormHelperTextProps={{
            style: {
              marginTop: "2px",
              fontSize: "8px",
            },
          }}
        />
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", m: "6px 0" }}>
        <PasswordIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
        <TextField
          autoComplete="off"
          type="password"
          {...register("password")}
          label="Senha"
          variant="filled"
          size="small"
          sx={{
            input: {
              color: "common.darkGray",
              fontSize: "15px",
              height: "10px",
            },
            label: { fontSize: "10px" },
          }}
          helperText={errors.password ? errors.password.message : " "}
          error={!!errors.password?.message}
          FormHelperTextProps={{
            style: {
              marginTop: "2px",
              fontSize: "8px",
            },
          }}
        />
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", m: "6px 0" }}>
        <CheckIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
        <TextField
          autoComplete="off"
          type="password"
          {...register("password_confirm")}
          label="Confirme sua senha"
          variant="filled"
          size="small"
          sx={{
            input: {
              color: "common.darkGray",
              fontSize: "15px",
              height: "10px",
            },
            label: { fontSize: "10px" },
          }}
          helperText={
            errors.password_confirm ? errors.password_confirm.message : " "
          }
          error={!!errors.password_confirm?.message}
          FormHelperTextProps={{
            style: {
              marginTop: "2px",
              fontSize: "8px",
            },
          }}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "18px",
        }}
      >
        <Checkbox size="small" {...register("acceptTerms")} />

        <Typography
          sx={{
            color: "action.active",
            fontSize: "10px",
          }}
        >
          Eu aceito os termos e condições de uso
        </Typography>
      </Box>
      <Typography
        sx={{ fontSize: "8px", color: "error.main" }}
        component="span"
      >
        {errors.acceptTerms ? errors.acceptTerms.message : " "}
      </Typography>
      <Button
        type="submit"
        sx={{
          m: "5px 0",
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
      <Button
        onClick={handleLogin}
        sx={{
          m: "5px 0",
          bgcolor: "secondary.main",
          color: "common.lightestGray",
          ":hover": {
            bgcolor: "primary.light",
            color: "secondary.dark",
          },
        }}
      >
        {" "}
        ENtrar em Sessão Atual
      </Button>

      <Instructions />
    </Box>
  );
};
export default FormBody;
