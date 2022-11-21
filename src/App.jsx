
import './App.css';
import Footer from './Components/Footer';
import NavBar from './Components/NavBar';
import ItemListContainer from './Components/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer text="HASTA UN 40% OFF" text2="EN TODAS LAS MARCAS"/>
      <img src="https://i.blogs.es/7fc543/alcohol/1366_2000.jpg" alt="Bebidas" width={2000} />
      <Footer/>
    </div>
  );
}

export default App;
