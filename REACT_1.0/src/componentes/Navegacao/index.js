import './estilo.css';

const texto_opcoes = ['CATEGORIAS', 'MINHA ESTANTE', 'FAVORITOS'];

function Navegacao(){
    return(
        <ul className='opcoes'>
          {texto_opcoes.map((texto) => (
            <li className='opcao'><p>{texto}</p></li>
          ))}
        </ul>
    );
}

export default Navegacao;