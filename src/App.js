
import { useReducer } from 'react';
import './App.css';
import { Div } from './components/Div';
import { AppContext } from './contexts/AppContext';

const globalState = {
  title: 'O Titulo do Context',
  body: 'O Body do Conyexto',
  counter: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'muda':
      console.log('Chamou Muda com', action.payload);
    return { ...state, title: action.payload};

    case 'inverter' : {
      console.log('Chamou Inverter');
      const { title} = state;
      return {
        ...state, title: title.split('').reverse().join('')
      };
    }
  }

  console.log("NENHUMA ACTION ENCONTRADA...");
  return { ...state};
};

function App() {
  const [state, dispatch] = useReducer(reducer, globalState);
  const { counter, title, body } = state;

  return (
     <div>
        <h1> {title} {counter} </h1>
        <button onClick={() => dispatch({
          type: 'muda',
          payload: new Date().toLocaleString('pt-BR'),
          })}
        >
          Click
        </button>
        <button onClick={() => dispatch({ type: 'inverter'})}>
          Invert
        </button>
        <button onClick={() => dispatch({ type: ''})}>
          SEM ACTION
        </button>
     </div>

    );
 }

export default App;
