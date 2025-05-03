import React from 'react';
import { Card } from 'react-bootstrap';

function TransactionsCard() {
  return (
    <Card className='mb-4'>
      <Card.Body>
        <Card.Title>Transactions</Card.Title>
        <Card.Text>
          <div>Payment (Sarah Williams → You): <span className="text-success">+$15.75</span></div>
          <div>Grocery Run: <span className="text-success">+$45.20</span></div>
          <div>Payment (You → Mike Brown): <span className="text-success">+$22.50</span></div>
          <div>Adjustment: <span className="text-danger">-$5.25</span></div>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default TransactionsCard;