import './App.css';
import Nav from './components/Nav/Nav';
import Home from './views/Home/Home';
import Search from './components/Search/Search';
import { Routes, Route } from 'react-router-dom';
import About from './components/About/About';
import AddProduct from './components/AddProduct/AddProduct';
import EditProduct from './components/EditProduct/EditProduct';
import Product from './components/Product/Product';
import ProductList from './components/ProductList/ProductList';

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path='/' element={ <Home /> } default />
        <Route path='/new' element={ <AddProduct /> } />
        <Route path='/products' element={ <ProductList /> } />
        <Route path='/products/:id' element={ <Product /> } />
        <Route path='/products/edit/:id' element={ <EditProduct /> } />
        <Route path='/about' element={ <About /> } />
      </Routes>
      <Search />
    </div>
  );
}

export default App;
