import './estilo.css';

function Resultado({children, onClick}) {
    return(
        <div className='resultadoPesquisa' onClick={onClick}>
            {children}
        </div>
    )
}

export default Resultado;
