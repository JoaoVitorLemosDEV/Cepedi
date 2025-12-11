import './estilo.css';

function Opcao({ children}){
    return(
        <li className='opcao'>
            {children}
        </li>
    )
}

export default Opcao;