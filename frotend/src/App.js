import {Container} from "react-bootstrap"
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import HomeScreen from "./Components/Screens/HomeScreen";
import {BrowserRouter as Router, Route,Routes} from "react-router-dom"
import ProductScreen from "./Components/Screens/ProductScreen";
import CartScreen from "./Components/Screens/CartScreen";
import ShippingScreen from "./Components/Screens/ShippingScreen";
import PaymentScreen from "./Components/Screens/PaymentScreen";
import PlaceOrder from "./Components/Screens/PlaceOrder";
import LoginScreen from "./Components/Screens/LoginScreen";

function App() {
  return (
    
    <Router>
    <Header/>
    <main className="py-4">
       <Container>
      <h1>
        Welcome to Plantshop
        </h1>
        <Routes>
          <Route path="/" element={<HomeScreen/>}/>
          <Route path='/login' element={<LoginScreen/>}/>

          <Route path='/product/:id' element={<ProductScreen/>}/>
          <Route path='/cart/:id?' element={<CartScreen/>}/>
          <Route path='/shipping' element={<ShippingScreen/>}/>
          <Route path='/payment' element={<PaymentScreen/>}/>
          <Route path='/placeorder' element={<PlaceOrder/>}/>

          
        </Routes>
      
    </Container>
    </main>
      <Footer/>
      </Router>
     
  );
}
   
  

export default App;