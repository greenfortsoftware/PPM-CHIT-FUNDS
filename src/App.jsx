// import Header from "./components/Header";
// import Navbar from "./components/Navbar";
// import Home from "./pages/Home";
// import Footer from "./components/Footer";

// function App() {
//   return (
//     <>
//       <Header />
//       <Navbar />
//       <Home />
//       <Footer />
//     </>
//   );
// }

// export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Policies from "./pages/Policies";
import Services from "./pages/Services";
import Claims from "./pages/Claims";
import Gallery from "./pages/Gallery";
import ContactUs from "./pages/ContactUs";

function App() {
  return (
    <>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/policies" element={<Policies />} />
        <Route path="/services" element={<Services />} />
        {/* <Route path="/claims" element={<Claims />} /> */}
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
