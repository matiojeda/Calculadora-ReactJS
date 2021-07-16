import React, {useState} from 'react'
import './App.css';

function App() {

  const [total, setTotal] = useState("");

  const handleButton = (e) => {
    //console.log(e.target.name);
    setTotal(total.concat(e.target.name));
  }

  const limpiar = () => {
    setTotal("");
  }

  const borrar = () => {
    if(total !== "")
    {
      setTotal(total.slice(0, -1));
    }    
  }

  const resultado = (e) => {
    try {
      setTotal(eval(total).toString());
    } catch (error) {
      setTotal("Error");
    }    
  }

  return (
    <div className="App">
      

      <div className="calculadora">      
        <h1>Calculadora 2.0</h1>
        <input type="text" value={total}></input>

        <div className="teclado">
          <button onClick={limpiar} id="limpiar">Limpiar</button>
          <button name='+' onClick={handleButton}>+</button>          
          <button name='/' onClick={handleButton}>&divide;</button>
          <button name='7' onClick={handleButton}>7</button>
          <button name='8' onClick={handleButton}>8</button>
          <button name='9' onClick={handleButton}>9</button>
          <button name='*' onClick={handleButton}>&times;</button>
          <button name='4' onClick={handleButton}>4</button>
          <button name='5' onClick={handleButton}>5</button>
          <button name='6' onClick={handleButton}>6</button>
          <button name='-' onClick={handleButton}>&ndash;</button>
          <button name='1' onClick={handleButton}>1</button>
          <button name='2' onClick={handleButton}>2</button>
          <button name='3' onClick={handleButton}>3</button>
          <button name='.' onClick={handleButton}>.</button>
          <button name='0' onClick={handleButton}>0</button>          
          <button onClick={borrar}>Borrar</button>
          <button name='=' onClick={resultado} id="igual">=</button>
        </div>

      </div>
    </div>
  );
}

export default App;
