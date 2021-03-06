import './scss/App.scss';
import {Header} from "./Header";
import {Main} from "./Main";

function App() {
    return (
        <div className="app">
            <div className="center">
                <Header/>
                <Main/>
            </div>
        </div>
    )
        ;
}

export default App;
