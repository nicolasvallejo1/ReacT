import Banners from "./components/Banners";
import Footer from "./components/Footer";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/Navbar";
//import Promocion from "./components/Promocion";




function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting={"Especialidad Tactica"} />
      < Banners />
    
      <Footer />
    </div>
  );
}

export default App;
