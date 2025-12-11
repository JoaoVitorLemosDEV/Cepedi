import './estilo.css';
import {Link} from 'react-router-dom';
import Opcao from '../Opcao';

const texto_opcoes = ['CATEGORIAS', 'MINHA ESTANTE', 'FAVORITOS'];

function Navegacao(){
    return(
        <ul className='opcoes'>
          {texto_opcoes.map((texto) => (
            <Link to={`/${texto.toLowerCase()}`} style={{ textDecoration: 'none' }}>
              <Opcao><p>{texto}</p></Opcao>
            </Link>
          ))}
        </ul>
    );
}

export default Navegacao;