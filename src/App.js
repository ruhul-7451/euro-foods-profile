import './App.css';
import ContactUs from './pages/ContactUs/ContactUs';
import Banner from './pages/shared/Banner/Banner';
import Footer from './pages/shared/Footer/Footer';
import Header from './pages/shared/Header/Header';

function App() {
  return (
    <div>
      <Header></Header>
      <Banner></Banner>
      <ContactUs></ContactUs>
      <Footer></Footer>
    </div>
  );
}

export default App;
