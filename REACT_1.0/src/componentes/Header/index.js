import './estilo.css';
import Logo from '../Logo';
import Navegacao from '../Navegacao';
import Icones from '../Icones';

function Header(){
    return(
        <header className="App-header">
            <Logo></Logo>
            <Navegacao></Navegacao>
            <Icones></Icones>
        </header>
    );
}

export default Header;


