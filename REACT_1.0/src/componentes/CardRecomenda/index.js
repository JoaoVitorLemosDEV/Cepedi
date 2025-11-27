import './estilo.css';
import Titulo from '../Titulo';
import Subtitulo from '../Subtitulo'; 
import Paragrafo from '../Paragrafo';
import { livro } from './dadosCardRecomenda';   

function CardRecomenda() {
    return(
        <div className='cardRecomenda'>
            <div className='texto'>
                <Titulo>Talvez você se interesse por</Titulo>
                <Subtitulo>Angular 11</Subtitulo>
                <Paragrafo>Construindo uma aplicação com a plataforma Google</Paragrafo>
            </div>
            <div className='imagem'>
                <img src = {livro.src} alt='livro'/>
                <button>Saiba mais</button>
            </div>
        </div>
    )   
}

export default CardRecomenda;