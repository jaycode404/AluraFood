export const validarNombre = (nombre) => {
    console.log(nombre);
    const length = nombre.length
    return (length >= 3 && length < 20) ? true :  false;
}


export const validarApellidos = (apellidos) => {
    console.log(apellidos);
    const length = apellidos.length
    return (length >= 3 && length < 50) ? true :  false;
}

export const validarTelefono = (telefono) => {
    const length = telefono.length
    return (length >= 8 && length < 12) ? true :  false;
}
