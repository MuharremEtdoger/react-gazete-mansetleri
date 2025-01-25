import GazeteListesi from "./components/GazeteListesi.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";

export default function App() {
    return (
      <>
        <Navbar />
        <div className="container">
        <GazeteListesi /> 
        </div>
             
      </>
    )
  }