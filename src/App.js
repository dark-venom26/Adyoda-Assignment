import './app.scss';
import Main from './components/main/Main';
import Topbar from './components/topbar/Topbar';

function App() {
  return (
    <div className="app">
      <Topbar/>
      <Main/>
    </div>
  );
}

export default App;
