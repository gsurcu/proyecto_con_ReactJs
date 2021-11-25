import './normalize.css';
import { NavBar } from './components/NavBar/NavBar'
// import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter} from 'react-router-dom';
// import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
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
