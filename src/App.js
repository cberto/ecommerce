import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useThemeHook } from './GlobalComponents/ThemeProvider';
import Header from './components/Header';
import { Router } from "@reach/router";

//Paginas
import Cart from './Pages/Cart';
import Home from './Pages/Home';
import Footer from './Pages/Footer';
import ProductDetails from './Pages/ProductDetails';


function App() {
  const [theme] = useThemeHook();
  return (
    <main className={theme? 'bg-black': 'bg-light-2'} style={{ height: '100vh', overflowY: 'auto'}}>
     <Header />
     
     <Router>
       <Home path="/" />
       <Cart path="/cart" />
       <ProductDetails path="product-details/:productId"/>
      </Router>
      <Footer />

    </main>
    
  );
}

export default App;
