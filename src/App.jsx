import "./App.css";
import { About } from "./Components/About/About";
import { Card } from "./Components/Card/Card";
import { Footer } from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import { Testimonials } from "./Components/Testimonials/Testimonials";


function App() {
  return (
    <>
      <Header />
      <Home />
      <Card />
      <About />
      <Testimonials />
      <Footer />
    </>
  );
}

export default App;
