import {Container} from "react-bootstrap"
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import HomeScreen from "./Components/Screens/HomeScreen";

function App() {
  return (
    <>
    <Header/>
    <main className="py-4">
       <Container>
      <h1>
        Welcome to Photoshop
        <HomeScreen/>
      </h1>
    </Container>
    </main>
      <Footer/>
      </>
  );
}
   
  

export default App;
