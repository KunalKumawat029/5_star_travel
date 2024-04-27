import { Route, Routes } from "react-router-dom";
import Footer from "./Componends/footer";
import Header from "./Componends/header";
import Topbar from "./Componends/topbar";
import HomePage from "./Pages/homePage";
import AboutPage from "./Pages/aboutPage";
import ServicesPage from "./Pages/servicesPage";
import PackegPage from "./Pages/packegPage";
import DestinationPage from "./Pages/destinationPage";
import BookingPage from "./Pages/bookingPage";
import GuidPage from "./Pages/guidPage";
import TestimonialPage from "./Pages/testimonialPage";
import ContactPage from "./Pages/contactPage";


function App() {
  return (
    <>
    <Topbar/>
    <Header/>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/about" element={<AboutPage/>}/>
      <Route path="/services" element={<ServicesPage/>}/>
      <Route path="/package" element={<PackegPage/>}/>
      <Route path="/destination" element={<DestinationPage/>}/>
      <Route path="/booking" element={<BookingPage/>}/>
      <Route path="/guid" element={<GuidPage/>}/>
      <Route path="/testimonial" element={<TestimonialPage/>}/>
      <Route path="/contact" element={<ContactPage/>}/>
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
