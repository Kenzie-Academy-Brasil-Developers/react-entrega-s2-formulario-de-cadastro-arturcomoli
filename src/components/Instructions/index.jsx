import { Modal, Box, Typography } from "@mui/material";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { useState } from "react";

const Instructions = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "100%",
    maxWidth: "350px",
    bgcolor: "background.start",
    border: "2px solid #9c27b0",
    boxShadow: 24,
    p: "10px",
  };
  const styleList = {
    fontSize: "12px",
    margin: "3px 0",
  };
  const styleTitle = {
    fontSize: "14px",
    fontWeight: "bold",
    margin: "5px 0",
  };
  return (
    <Box>
      <Typography
        onClick={handleOpen}
        component="span"
        sx={{
          fontSize: "12px",
          color: "common.darkGray",
          ":hover": {
            cursor: "pointer",
            color: "common.darkestGray",
          },
        }}
      >
        Instruções de preenchimento
      </Typography>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" sx={styleTitle}>
            Instruções para preenchimento do formulário
          </Typography>
          <Box sx={{ display: "flex" }}>
            <ArrowRightIcon />
            <Typography sx={styleList}>
              Nome: Serão aceitos apenas letras nesse campo
            </Typography>
          </Box>
          <Box sx={{ display: "flex" }}>
            <ArrowRightIcon />
            <Typography sx={styleList}>
              E-mail: Apenas e-mails com o formato correto serão aceitos
              (exemplo@email.com)
            </Typography>
          </Box>
          <Box sx={{ display: "flex" }}>
            <ArrowRightIcon />
            <Typography sx={styleList}>
              Senha: O padrão de senha deverá ser do tipo forte(mínimo de 8
              dígitos, letra maiúscula, letra minúscula, números e caracteres
              especiais (#*!_...))
            </Typography>
          </Box>
          <Box sx={{ display: "flex" }}>
            <ArrowRightIcon />
            <Typography sx={styleList}>
              Validação da senha: Você deverá digitar exatamente a mesma senha
              que foi passada no campo de senha
            </Typography>
          </Box>
          <Box sx={{ display: "flex" }}>
            <ArrowRightIcon />
            <Typography sx={styleList}>
              Quando se cadastrar, seu nome ficará salvo e será possível voltar
              à página de cadastro e acessar sua sessão atual novamente clicando
              no botão "ENTRAR EM SESSÃO ATUAL", caso clique em deslogar, seu
              nome será apagado da memória e para acessar a página novamente
              você terá que realizar um novo cadastro.
            </Typography>
          </Box>
          <Box sx={{ display: "flex" }}>
            <ArrowRightIcon />
            <Typography sx={styleList}>
              Clique em qualquer lugar fora da caixa para sair!
            </Typography>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
};

export default Instructions;
