import './App.css';
import MainRouter from './router/MainRouter';
import {ContProvider} from "./context/ContProvider"

function App() {
  return (
    <div className="App">
      <ContProvider>
   <MainRouter/>
   </ContProvider>
    </div>
  );
}

export default App;
