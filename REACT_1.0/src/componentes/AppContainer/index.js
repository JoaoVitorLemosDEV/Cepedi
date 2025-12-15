import './estilo.css';

function AppContainer({children}) {
    return(
        <div className="App-container">
            {children}
        </div>
    );
}

export default AppContainer;