import './App.css';
import {HashRouter} from 'react-router-dom'
import Main from "./presenters/mainPresenter"

function App() {
  return (
    <HashRouter className="app">
        <Main/>
    </HashRouter>
  );
}

export default App;