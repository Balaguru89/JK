import Header from './Components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel  from './Components/Carousel';
import Aboutus from './Components/Aboutus';
import Testinimonials from './Components/Testinimonials';
import ScrollTop from './Components/ScrollTop';
import Footer from './Components/Footer';
import ContactUs from './Components/Contactus';

function App() {
  return (
    <div>
      <Header />
      <Carousel />
      <Aboutus />
      <Testinimonials/>
      <ContactUs />
      <ScrollTop />
      <Footer />
      
    </div>
  );
}

export default App;
