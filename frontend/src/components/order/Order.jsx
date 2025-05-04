import React, { useState } from 'react';
import { Button, Tabs, Tab, Badge } from 'react-bootstrap';

const activeOrders = [
  {
    store: "Whole Foods",
    status: "In Progress",
    statusColor: "primary",
    orderId: "ORD-001",
    date: "2023-03-10",
    amount: 78.45,
  },
  {
    store: "Trader Joe's",
    status: "Pending Payment",
    statusColor: "warning",
    orderId: "ORD-002",
    date: "2023-03-08",
    amount: 45.20,
  },
  {
    store: "Costco",
    status: "Awaiting Confirmation",
    statusColor: "secondary",
    orderId: "ORD-003",
    date: "2023-03-05",
    amount: 156.78,
  },
];

const completedOrders = [
  {
    store: "Walmart",
    status: "Completed",
    statusColor: "success",
    orderId: "ORD-004",
    date: "2023-02-28",
    amount: 62.10,
  },
];

function Order() {
  const [tab, setTab] = useState('active');

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="fw-bold">Orders</h2>
        <Button variant="success">Create New Order</Button>
      </div>
      <div className="mb-3">
        <div className="fw-semibold">Order History</div>
        <div className="text-muted small mb-2">View and manage your grocery orders</div>
        <Tabs
          activeKey={tab}
          onSelect={setTab}
          className="mb-3"
        >
          <Tab eventKey="active" title="Active Orders">
            {activeOrders.map((order, idx) => (
              <div key={idx} className="d-flex align-items-center justify-content-between border rounded p-3 mb-3 bg-white">
                <div>
                  <div className="fw-semibold">{order.store} <Badge bg={order.statusColor}>{order.status}</Badge></div>
                  <div className="text-muted small">Order ID: {order.orderId}</div>
                  <div className="text-muted small">Date: {order.date}</div>
                </div>
                <div className="fw-bold text-success fs-5">${order.amount.toFixed(2)}</div>
                <Button variant="outline-success">View Details</Button>
              </div>
            ))}
          </Tab>
          <Tab eventKey="completed" title="Completed Orders">
            {completedOrders.map((order, idx) => (
              <div key={idx} className="d-flex align-items-center justify-content-between border rounded p-3 mb-3 bg-white">
                <div>
                  <div className="fw-semibold">{order.store} <Badge bg={order.statusColor}>{order.status}</Badge></div>
                  <div className="text-muted small">Order ID: {order.orderId}</div>
                  <div className="text-muted small">Date: {order.date}</div>
                </div>
                <div className="fw-bold text-success fs-5">${order.amount.toFixed(2)}</div>
                <Button variant="outline-success">View Details</Button>
              </div>
            ))}
          </Tab>
        </Tabs>
      </div>
    </div>
  );
}

export default Order;