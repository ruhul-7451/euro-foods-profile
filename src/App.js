import './App.css';
import ContactUs from './pages/ContactUs/ContactUs';
import Homepage from './pages/Homepage/Homepage';
import Footer from './pages/shared/Footer/Footer';
import Header from './pages/shared/Header/Header';

function App() {
  return (
    <div>
      <Header></Header>
      <Homepage></Homepage>
      <ContactUs></ContactUs>
      <br />
      <Footer></Footer>
    </div>
  );
}

export default App;
