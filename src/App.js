import './App.css';
import { Fragment } from 'react';
import Header from './Components/Header';
import Main from './Components/Main';
import Footer from './Components/Footer';
import Heighlights from './Components/Highlights';
import Testimonials from './Components/Testimonials';
import About from './Components/About';
import Hero from './Components/Hero';

function App() {
  return (
    <Fragment  >
      <Header />
      <Main>
        <Hero />
        <Heighlights />
        <Testimonials />
        <About />
      </Main>
      <Footer />
    </Fragment>

  );
}

export default App;
