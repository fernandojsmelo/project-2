import React, { useContext, useState } from 'react';
import './App.css';

const globalState = {
  title: 'O Titulo do Contexto',
  body: ' Body do Contexto',
  counter: 0,
};
const GlobalContext = React.createContext();


const Div = ({ children }) => {
  return (
    <>
      <H1 />
      <P />
    </>
  );
};

const H1 = () => {
  const theContext = useContext(GlobalContext);
  const {
    contextState: { title, counter},
  } = theContext;
  return (
    <h1>
      {title} {counter}
    </h1>
  );
};

const P = () => {
  const theContext = useContext(GlobalContext);
  const {
    contextState: {  body, counter},
    setContextState,
  } = theContext;
  return (
    <p
      onClick={() => setContextState((s) => ({...s, counter: s.counter + 1}))}
    >
      {body} {counter}
    </p>
  )
}
function App() {
  const [contextState, setContextState] = useState(globalState);

  return (
    <GlobalContext.Provider value={{ contextState, setContextState}}>
      <Div />
    </GlobalContext.Provider>
  );
 }

export default App;
