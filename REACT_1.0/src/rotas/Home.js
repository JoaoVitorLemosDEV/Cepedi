import './App.css';
import Pesquisa from '../componentes/Pesquisa';
import UltimosLancamentos from '../componentes/UltimosLancamentos';
import CardRecomenda from '../componentes/CardRecomenda';

function Home() {
  return (
    <div className="App">
        <Pesquisa></Pesquisa>
        <UltimosLancamentos></UltimosLancamentos>
        <CardRecomenda></CardRecomenda>
    </div>
  );
}

export default Home;
