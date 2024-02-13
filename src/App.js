import './App.css';
import { useEffect, useState } from 'react';

const eventFn = () => {
  console.log('h1 Clicado');
};

function App() {
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(0);

  // ComponetDidUpdate - Execulta toda vez que o Componete atualiza
  useEffect(() => {
    console.log("ComponentDidUpdate");
  })

  // ComponetDidMount - Execulta 1 vez
  useEffect(() => {
    document.querySelector('h1')?.addEventListener('click', eventFn);

    // ComponentWillUmount - Limpeza
    return () => {
      document.querySelector('h1')?.removeEventListener('click', eventFn);
    };
  },[])

   // Com epêndencia - Execulta toda vez que a depêndencia mudar
   useEffect(() => {
    console.log("Contador mudou para", counter);
  },[counter])

  return (
    <div className="App">
      <p> Teste 1</p>

      <h1> C1: {counter} C2: {counter2}</h1>
      <button onClick={() => setCounter(counter + 1)}>+</button>
      <button onClick={() => setCounter2(counter2 + 1)}>+(2)</button>
    </div>
  );
 }

export default App;
