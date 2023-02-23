export default function validateInputs(name, contrasena) {
  const errors = {
    name: '',
    contrasena: '',
  };

  if (name.length === 0) errors.name = 'Ingrese el nombre';
  if (name.length > 10) errors.name = 'Debe contener maximo 10 caracteres';

  if (contrasena.length === 0) errors.contrasena = 'Ingrese la contrasena';
  if (contrasena.length > 10) errors.contrasena = 'Debe contener maximo 10 caracteres';

  console.log('💻 -> validateInputs -> errors:', errors);
  return errors;
}
