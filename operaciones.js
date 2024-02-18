const fs = require("fs");

const obtenerCitas = () => {
  const citas = JSON.parse(fs.readFileSync("./citas.json", "utf-8"));
  return citas;
};

const registrar = (nombre, edad, tipo, color, enfermedad) => {
  const nuevoRegistro = {
    nombre: nombre,
    edad: edad,
    animal: tipo,
    color: color,
    enfermedad: enfermedad,
  };
  const citas = obtenerCitas();
  citas.push(nuevoRegistro);
  fs.writeFileSync("./citas.json", JSON.stringify(citas));
};

const leer = () => {
  const citas = obtenerCitas();
  console.log(citas);
};

module.exports = { registrar, leer };
