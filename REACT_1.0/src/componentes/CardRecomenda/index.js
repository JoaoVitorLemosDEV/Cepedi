import './estilo.css';
import Titulo from '../Titulo';
import Subtitulo from '../Subtitulo'; 
import Paragrafo from '../Paragrafo';
import livro2 from '../../imagens/livro2.jpeg';

function CardRecomenda() {
    return(
        <div className='cardRecomenda'>
            <Titulo>Talvez você se interesse por</Titulo>
            <Subtitulo>Angular 11</Subtitulo>
            <Paragrafo>Construindo uma aplicação com a plataforma Google</Paragrafo>
            <img src = '' alt='livro'/>
            <button>Saiba mais</button>
        </div>
    )   
}

export default CardRecomenda;