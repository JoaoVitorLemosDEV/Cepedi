import './estilo.css';
import Titulo from '../Titulo';
import UltimosLancamentosContainer from '../UltimosLancamentosContainer';
import NovosLivrosContainer from '../NovosLivrosContainer';
import { livros } from './dadosUltimosLancamentos';

function UltimosLancamentos() {
    return (
        <UltimosLancamentosContainer>
            <Titulo cor = "#cc7504">ÚLTIMOS LANÇAMENTOS</Titulo>
                <NovosLivrosContainer>
                    {livros.map(livro => (
                        <img src={livro.src} alt='livro'/>
                    ))}
                </NovosLivrosContainer>
        </UltimosLancamentosContainer>
    )
}

export default UltimosLancamentos;