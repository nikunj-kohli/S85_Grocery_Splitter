import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

async function reportWebVitals() {
  try {
    const { getCLS, getFID, getLCP } = await import('web-vitals');
    getCLS(console.log); // Logs Cumulative Layout Shift
    getFID(console.log); // Logs First Input Delay
    getLCP(console.log); // Logs Largest Contentful Paint
  } catch (error) {
    console.error('Failed to load web-vitals module:', error);
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Start measuring performance
reportWebVitals();
