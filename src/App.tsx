import "./assets/boxicons-2.0.7/css/boxicons.min.css";
import "./App.scss";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { BrowserRouter, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Routing from "./config/Routing";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routing />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
