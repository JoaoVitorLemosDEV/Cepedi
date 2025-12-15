import './App.css';
import { useState, useEffect } from 'react';
import { getFavoritos } from '../servicos/favoritos';
import AppContainer from '../componentes/AppContainer';
import ResultadoContainer from '../componentes/ResultadoContainer';
import Titulo from '../componentes/Titulo';
import Resutado from '../componentes/Resultado';
import livroImg from '../imagens/livro.png';
import { deleteFavorito } from '../servicos/favoritos';

function Favoritos() {

  const [Favoritos, setFavoritos] = useState([]);

  useEffect (() => {
      fetchFavoritos();
  }, [])

  async function fetchFavoritos() {
      const favoritosDaAPI = await getFavoritos()
      setFavoritos(favoritosDaAPI);
  }

  async function deletarFavorito(id) {
      await deleteFavorito(id);
      alert('Livro de id ' + id + ' deletado!')
      await fetchFavoritos();
  }

  return (
    <AppContainer>
      <div>
        <Titulo>Aqui estão seus livros favoritos:</Titulo>
        <ResultadoContainer>

        {
          Favoritos.length !== 0 ?Favoritos.map(favorito => (
            <Resutado onClick={() => deletarFavorito(favorito.id)}>
              <p>{favorito.nome}</p>
              <img src={livroImg} alt='imagem do livro'/>
            </Resutado>
        )) : null
        }

        </ResultadoContainer>
      </div>
    </AppContainer>
  );
}

export default Favoritos;
