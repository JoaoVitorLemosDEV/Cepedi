import './estilo.css';

function Titulo({ children }) {
    return (
        <h2 className="custom_title">{children}</h2>
    )
}

export default Titulo;