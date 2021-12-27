// import './normalize.css';
import { NavBar } from './components/NavBar/NavBar'
import { BrowserRouter} from 'react-router-dom';
import { AppRouter } from './router/AppRouter';
import { CartProvider } from './context/CartContext';
import { Footer } from './components/Footer/Footer';

function App() {
  return (
    <CartProvider>
      <BrowserRouter>

        <NavBar />
        <AppRouter />
        <Footer />

      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
