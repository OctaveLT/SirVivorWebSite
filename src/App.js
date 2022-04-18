import './App.css';
import {HashRouter} from 'react-router-dom'
import Main from "./presenters/mainPresenter"

function App(props) {
  return (
    <HashRouter>
        <Main/>
    </HashRouter>
  );
}

export default App;