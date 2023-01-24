import './App.css';
import { Button } from './components/Button';
import { Pantalla } from './components/Pantalla';
import { useState } from 'react';

function App() {

  const [resultado, setResultado] = useState("")

  const agregarInput = val => {
    setResultado(resultado + val)
  }

  const limpiarResultado = _ => {
    setResultado("")
  }

  const evaluarResultado = _ => {
    setResultado(String(eval(resultado)))
  }

  return (
    <div className="App">
      <table className='calculator'>
        <tr>
          <td colSpan={3}> <Pantalla valor={resultado}/> </td>
          <td> <Button esNumOper={false} valor={"C"} manejarClick={limpiarResultado}/> </td>
        </tr>
        <tr>
          <td> <Button esNumOper={true} valor={"1"} manejarClick={agregarInput}/> </td>
          <td> <Button esNumOper={true} valor={"2"} manejarClick={agregarInput}/> </td>
          <td> <Button esNumOper={true} valor={"3"} manejarClick={agregarInput}/> </td>
          <td> <Button esNumOper={true} valor={"/"} manejarClick={agregarInput}/> </td>
        </tr>
        <tr>
          <td> <Button esNumOper={true} valor={"4"} manejarClick={agregarInput}/> </td>
          <td> <Button esNumOper={true} valor={"5"} manejarClick={agregarInput}/> </td>
          <td> <Button esNumOper={true} valor={"6"} manejarClick={agregarInput}/> </td>
          <td> <Button esNumOper={true} valor={"-"} manejarClick={agregarInput}/> </td>
        </tr>
        <tr>
          <td> <Button esNumOper={true} valor={"7"} manejarClick={agregarInput}/> </td>
          <td> <Button esNumOper={true} valor={"8"} manejarClick={agregarInput}/> </td>
          <td> <Button esNumOper={true} valor={"9"} manejarClick={agregarInput}/> </td>
          <td> <Button esNumOper={true} valor={"+"} manejarClick={agregarInput}/> </td>
        </tr>
        <tr>
          <td> <Button esNumOper={true} valor={"."} manejarClick={agregarInput}/> </td>
          <td> <Button esNumOper={true} valor={"0"} manejarClick={agregarInput}/> </td>
          <td> <Button esNumOper={false} valor={"="} manejarClick={evaluarResultado}/> </td>
          <td> <Button esNumOper={true} valor={"*"} manejarClick={agregarInput}/> </td>
        </tr>
      </table>
    </div>
  );
}

export default App;
