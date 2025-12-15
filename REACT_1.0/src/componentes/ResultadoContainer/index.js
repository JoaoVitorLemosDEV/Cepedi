import './estilo.css';

function ResultadoContainer({children}) {
    return(
        <div className="Resultado-container">
            {children}
        </div>
    );
}

export default ResultadoContainer;