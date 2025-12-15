import './estilo.css';
import Titulo from '../Titulo';
import Subtitulo from '../Subtitulo';
import Resultado from '../Resultado';
import { useState } from 'react';
// import { livros } from './dadosPesquisa';
import { getLivros } from '../../servicos/livros';
import { useEffect } from 'react';
import { postFavorito } from '../../servicos/favoritos';

function Pesquisa() {
    // const [textoDigitado, setTextoDigitado] = useState('');
    const [livrosPesquisados, setLivrosPesquisados] = useState([]);
    const [livros, setLivros] = useState([]);
    
    useEffect (() => {
        fetchLivros();
    }, [])

    async function fetchLivros() {
        const livrosDaAPI = await getLivros()
        setLivros(livrosDaAPI);
    }

    async function inserirFavorito(id) {
        await postFavorito(id);
        alert('Livro de id ' + id + ' inserido!')
    }

    return(
        <section className='pesquisa'>
            <Titulo>Já sabe por onde começar?</Titulo>
            <Subtitulo>Encontre seu produto.</Subtitulo>
            <input placeholder="Digite aqui o que deseja" 
            onBlur={evento =>{
                const textoDigitado = evento.target.value;
                const resultadoPesquisa = livros.filter(livro => livro.nome.toLowerCase().includes(textoDigitado.toLowerCase()));
                setLivrosPesquisados(resultadoPesquisa);
            }}></input>

            {livrosPesquisados.map(livro => (
                    <Resultado onClick={() => inserirFavorito(livro.id)}>
                        <p>{livro.nome}</p>
                        <img src= {livro.src} alt='livro'></img>
                    </Resultado>
            ))}
            {/* <p>{textoDigitado}</p> */}
        </section>
    )
}

export default Pesquisa;