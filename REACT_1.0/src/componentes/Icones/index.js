import './estilo.css';
import perfil from '../../imagens/perfil.svg';
import sacola from '../../imagens/sacola.svg';

const icones_opcoes = [perfil, sacola];

function Icones(){
    return(
        <ul className='icones'>
            {icones_opcoes.map((icone) => (
            <li className='opcao_icone'><img src={icone} alt="icone" /></li>
            ))}
        </ul>
    )
}

export default Icones;