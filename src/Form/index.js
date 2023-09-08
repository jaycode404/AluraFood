import React, { useState, useEffect } from "react";
import { Box, SliderValueLabelUnstyled, Typography } from "@mui/material";
import { LogoSpace, FormSpace, Img } from "./styles";
import DatosUsuario from "./DatosUsuario";
import DatosPersonales from "./DatosPersonales";
import DatosEntrega from "./DatosEntrega";
import Complete from "./Complete";
import Stepper from "../Stepper";
import Step from "./Step";

//validaciones
import { validarEmail, validarPassword } from "./DatosUsuario/validaciones";

const Form = () => {
  const [step, setStep] = useState(0);
  const [pasos, setPasos] = useState({})

  useEffect(() => {
    console.log('use effect.')
  })
  useEffect(() => {
    console.log('se actulaixo step', step)
  },[step])



  const updateStep = (step) => {
    console.log('actualizarpaso', step)
    setStep(step)
  }

  const steps = {
    0: <DatosUsuario updateStep={updateStep} />,
    1: <DatosPersonales updateStep={updateStep} />,
    2: <DatosEntrega updateStep={updateStep} />,
    3: <Complete updateStep={updateStep} />
  }

  const onSubmit = (e) => {
    e.preventDefault()
    let newStep = step + 1
    setStep(newStep)
    console.log('newStep:', newStep);
    console.log('step:', step);
  }
  const handleChange = (elemento, position, currentStep, validator) => {
    const value = elemento.target.value
    const valid = validator(value)

    console.log(value);
    console.log(valid);
    console.log('position:', position);
    console.log('step:', currentStep);
    console.log('validator:', validator);

    stepsFlow[0].inputs[0].label = 'nombre'
    console.log(stepsFlow);
  }

  const stepsFlow = {
    0: {
      inputs: [
        {
          label: "E-mail",
          type: "email",
          value: "",
          valid: null,
          onChange: handleChange,
          helperText: "ingresa un email valido",
          validator: validarEmail,
        },
        {
          label: "Pasword",
          type: "password",
          value: "",
          valid: null,
          onChange: handleChange,
          helperText: "ingresa un password valido, con al menos 8 caracteres",
          validator: validarPassword
        },

      ],
      buttonText: "siguiente",
      onSubmit

    },
    1: {
      inputs: [
        {
          label: "E-mail",
          type: "email",
          value: "",
          valid: null,
          onChange: handleChange,
          helperText: "ingresa un email valido",
          validator: validarEmail,
        },
        {
          label: "Pasword",
          type: "password",
          value: "",
          valid: null,
          onChange: handleChange,
          helperText: "ingresa un password valido, con al menos 8 caracteres",
          validator: validarPassword
        },

      ],
      buttonText: "siguiente",
      onSubmit

    }
  }

  return (
    <Box
      sx={{
        padding: "30px",
        display: "flexbox",
        flexDirection: "column",
      }}
    >
      <LogoSpace>
        <Img src={"/favicon.png"} />
        <Typography variant="h3">AluraFood</Typography>
      </LogoSpace>
      <FormSpace>
        {step < 3 && <Stepper step={step} />}
        {/* {steps[step]} */}
        <Step data={stepsFlow[step]} step={step} />
      </FormSpace>
    </Box>
  );
};

export default Form;
