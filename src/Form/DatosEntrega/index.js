import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";
import { validarInput } from "./validaciones";

const DatosEntrega = ({ updateStep }) => {
  const [dir, setDir] = useState({ value: '', valid: null });
  const [ciudad, setCiudad] = useState({ value: '', valid: null });
  const [estado, setEstado] = useState({ value: '', valid: null });

  return (
    <Box
      component="form"
      autocomplete="off"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
      onSubmit={(e) => {
        e.preventDefault()
        updateStep(3)
        console.log(dir, ciudad, estado);
      }}
    >
      <TextField
        label="Dirección"
        variant="outlined"
        fullWidth
        margin="dense"
        type="text"
        value={dir.value}
        onChange={(input) => {
          const value = input.target.value
          const valid = validarInput(value)
          setDir({ value, valid })
        }}
        error={dir.valid === false}
        helperText={dir.valid === false && "Ingresa una direccion valida con al menos 3 caracteres"}
      />
      <TextField
        label="Ciudad"
        variant="outlined"
        fullWidth
        margin="dense"
        type="text"
        value={ciudad.value}
        onChange={(input) => {
          const value = input.target.value
          const valid = validarInput(value)
          setCiudad({ value, valid })
        }}
        error={ciudad.valid === false}
        helperText={ciudad.valid === false && "Ingresa una ciudad con al menos 3 caracteres"}
      />
      <TextField
        label="Estado/Provincia"
        variant="outlined"
        fullWidth
        margin="dense"
        type="text"
        value={estado.value}
        onChange={(input) => {
          const value = input.target.value
          const valid = validarInput(value)
          setEstado({ value, valid })
        }}
        error={estado.valid === false}
        helperText={estado.valid === false && "Ingresa un estado con al menos 3 caraacteres "}
      />
      <Button variant="contained" type="submit">
        Crear cuenta
      </Button>
    </Box>
  );
};

export default DatosEntrega;
