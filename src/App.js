import './App.css';

import { Routes, Route } from "react-router-dom";

import Main from './Components/Main';

import BookingPage from './Components/BookingPage';
import Layout from './Components/Layout';
import About from './Components/About';
import OnlineOrder from './Components/OnlineOrder';

function App() {
  return (
      <Layout>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/booking" element={<BookingPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/order-online" element={<OnlineOrder />}/>
          </Routes>

      </Layout>

  );
}

export default App;
