import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/landing/LandingPage';
import ExploreProducts from './components/explore/pages/ExploreProducts';

const Orders = () => <div className="p-4">Orders Page (Coming Soon)</div>;
const SettleUp = () => <div className="p-4">Settle Up Page (Coming Soon)</div>;
const SplitHistory = () => <div className="p-4">Split History Page (Coming Soon)</div>;
const Contact = () => <div className="p-4">Contact Us Page (Coming Soon)</div>;

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/explore" element={<LandingPage rightContent={<ExploreProducts />} />} />
        <Route path="/orders" element={<LandingPage rightContent={<Orders />} />} />
        <Route path="/settle-up" element={<LandingPage rightContent={<SettleUp />} />} />
        <Route path="/split-history" element={<LandingPage rightContent={<SplitHistory />} />} />
        <Route path="/contact" element={<LandingPage rightContent={<Contact />} />} />
      </Routes>
    </Router>
  );
}

export default App;