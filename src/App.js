import './normalize.css';
import { NavBar } from './components/NavBar/NavBar'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';


function App() {
  return (
    <>
      <NavBar />

      <ItemListContainer greeting="Proyecto con ReactJS!" />
    </>
  );
}

export default App;
