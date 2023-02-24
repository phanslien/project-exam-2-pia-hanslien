import styles from "./App.css";
import NavBar from "./components/navbar/Navbar";
import AppRoutes from "./components/navbar/NavRoutes";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <NavBar />
      <AppRoutes />
      <Footer />
    </>
  );
}

export default App;
