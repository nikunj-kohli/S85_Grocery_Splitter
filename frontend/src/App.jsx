import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/landing/LandingPage';
import ExploreProducts from './components/explore/pages/ExploreProducts';
import Order from './components/order/Order';
import AllSplits from './components/landing/AllSplits';

const SettleUp = () => <div className="p-4">Settle Up Page (Coming Soon)</div>;
const Contact = () => <div className="p-4">Contact Us Page (Coming Soon)</div>;

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/explore" element={<LandingPage rightContent={<ExploreProducts />} />} />
        <Route path="/settle-up" element={<LandingPage rightContent={<SettleUp />} />} />
        <Route path="/all-splits" element={<LandingPage rightContent={<AllSplits />} />} />
        <Route path="/contact" element={<LandingPage rightContent={<Contact />} />} />
        <Route path="/orders" element={<LandingPage rightContent={<Order />} />} />
      </Routes>
    </Router>
  );
}

export default App;