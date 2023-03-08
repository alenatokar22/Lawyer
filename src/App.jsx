import Header from "./components/Header";
import Swiper from "./components/Swiper";
import Physical from "./components/Physical";
import Law from "./components/Law";
import About from "./components/About";
import Footer from "./components/Footer";

function App() {
  return (
    <main>
      <div className="header__wrapper">
        <Header />
      </div>
      <Swiper />
      <About />
      <Physical />
      <Law />
      <div className="footer">
        <Footer />
      </div>
    </main>
  );
}

export default App;
