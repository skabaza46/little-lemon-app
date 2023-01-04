import './App.css';

import { Routes, Route } from "react-router-dom";

import Main from './Components/Main';

import BookingPage from './Components/BookingPage';
import Layout from './Components/Layout';
import About from './Components/About';
import OnlineOrder from './Components/OnlineOrder';
import LoginPage from './Components/Login';
import OnlineMenu from './Components/OnlineMenu';

function App() {
  return (
      <Layout>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/booking" element={<BookingPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/order-online" element={<OnlineOrder />}/>
            <Route path="/login" element={<LoginPage />}/>
            <Route path="/menu" element={<OnlineMenu />}/>
          </Routes>

      </Layout>

  );
}

export default App;
