// import './normalize.css';
import { NavBar } from './components/NavBar/NavBar'
import { BrowserRouter} from 'react-router-dom';
import { AppRouter } from './router/AppRouter';


function App() {
  return (
    <>
      <BrowserRouter>

        <NavBar />
        <AppRouter />

      </BrowserRouter>
    </>
  );
}

export default App;
