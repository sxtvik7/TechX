import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header_comp/Header";
import Footer from "./components/footer_comp/Footer";
import Home from "./components/home_comp/Home";

import "./styles/App.css";
import "./components/header_comp/Header.css";
import "./components/footer_comp/Footer.css";
import Products from "./screen/Products";
import PrdtDetails from "./screen/PrdtDetails";
import Cart from "./screen/Cart/Cart";
import About from "./screen/about/About.jsx";
import SignupUser from "./screen/Login&signup from/SignupUser.jsx";
import LoginUser from "./screen/Login&signup from/LoginUser.jsx";
import { Toaster } from "react-hot-toast";
import UserProfile from "./screen/profile/UserProfile.jsx";
import Success from "./screen/Success/Success.jsx";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/TechX" element={<Home />} />
        <Route path="/products/:id" element={<PrdtDetails />} />
        <Route path="/shop" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<SignupUser />} />
        <Route path="/login" element={<LoginUser />} />
        <Route path="/profile" element={<UserProfile/>} />
        <Route path="/thank-you" element={<Success/>} />
      </Routes>
      <Footer />
      <Toaster />
    </Router>
  );
}

export default App;
