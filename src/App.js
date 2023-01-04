import './App.css';
import { Fragment } from 'react';

import { Routes, Route } from "react-router-dom";

import Main from './Components/Main';

import BookingPage from './Components/BookingPage';
import Layout from './Components/Layout';

function App() {
  return (
      <Layout>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/booking" element={<BookingPage />} />
          </Routes>

      </Layout>
    
  );
}

export default App;
