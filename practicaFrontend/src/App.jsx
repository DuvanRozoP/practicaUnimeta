import { useState } from 'react';
import valdiate from './helpers/validate';
import './App.css';

function App() {
  const [state, setState] = useState({
    name: '',
    contrasena: '',
  });
  const [errors, setError] = useState({
    name: '',
    contrasena: '',
  });

  function handleInputs(event) {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
    setError(valdiate(state.name, state.contrasena));
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <section className='containerLogin'>
      <form onSubmit={handleSubmit} className='App'>
        <label className='title'>Ingrese usuario</label>
        <input
          name='name'
          value={state.name}
          onChange={handleInputs}
          type='text'
          placeholder='Ingrese su nombre de usuario'
        />
        <label className='error'>{errors.name}</label>

        <label className='title'>Ingrese contrasena</label>
        <input
          name='contrasena'
          value={state.contrasena}
          onChange={handleInputs}
          type='text'
          placeholder='Ingrese su contrasena'
        />
        <label className='error'>{errors.contrasena}</label>

        <button type='submit'>Ingresar</button>
      </form>
    </section>
  );
}

export default App;
