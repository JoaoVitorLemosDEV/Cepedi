import './estilo.css';
import perfil from '../../imagens/perfil.svg';
import sacola from '../../imagens/sacola.svg';

const texto_opcoes = ['CATEGORIAS', 'MINHA ESTANTE', 'FAVORITOS'];
const icones_opcoes = [perfil, sacola];

function Navegacao(){
    return(
        <ul className='opcoes'>
          {texto_opcoes.map((texto) => (
            <li className='opcao'><p>{texto}</p></li>
          ))}
          {icones_opcoes.map((icone) => (
            <li className='opcao_icone'><img src={icone} alt="icone" /></li>
          ))}
        </ul>
    );
}

export default Navegacao;