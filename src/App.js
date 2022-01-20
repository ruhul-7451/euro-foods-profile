import './App.css';
import ContactUs from './pages/ContactUs/ContactUs';
import Homepage from './pages/Homepage/Homepage';
import Footer from './pages/shared/Footer/Footer';
import Header from './pages/shared/Header/Header';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Services from './pages/Services/Services';
import NotFound from './pages/NotFound/NotFound';
import Products from './pages/Products/Products';
import CompanyDetails from './pages/CompanyDetails/CompanyDetails';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="services" element={<Services />} />
          <Route path="contact" element={<ContactUs />} />
          <Route path="products" element={<Products />} />
          <Route path="details" element={<CompanyDetails />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
        <br />
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
