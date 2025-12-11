import './estilo.css';
import Logo from '../Logo';
import Navegacao from '../Navegacao';
import Icones from '../Icones';
import {Link} from 'react-router-dom';

function Header(){
    return(
        <header className="App-header">
            <Link to="/" style={{textDecoration: "none"}}>
                <Logo/>
            </Link>
            <Navegacao></Navegacao>
            <Icones></Icones>
        </header>
    );
}

export default Header;


