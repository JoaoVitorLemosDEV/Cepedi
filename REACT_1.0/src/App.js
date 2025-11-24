import './App.css';
import Header from './componentes/Header';
import Pesquisa from './componentes/Pesquisa';
import UltimosLancamentos from './componentes/UltimosLancamentos';
import CardRecomenda from './componentes/CardRecomenda';

function App() {
  return (
    <div className="App">
        <Header></Header>
        <Pesquisa></Pesquisa>
        <UltimosLancamentos></UltimosLancamentos>
        <CardRecomenda></CardRecomenda>
    </div>
  );
}

export default App;
