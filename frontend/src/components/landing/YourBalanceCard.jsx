import React from 'react';
import { Card } from 'react-bootstrap';

function YourBalanceCard() {
  return (
    <Card className='mb-4'>
      <Card.Body>
        <Card.Title>Your Balance</Card.Title>
        <Card.Text>Total owed to you: <span className="text-success">$32.80</span></Card.Text>
        <Card.Text>Total you owe: <span className="text-danger">$12.75</span></Card.Text>
        <Card.Text>Net balance: <span className="fw-bold">$20.05</span></Card.Text>
      </Card.Body>
    </Card>
  );
}

export default YourBalanceCard;