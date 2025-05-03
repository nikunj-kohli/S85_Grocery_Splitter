import React from 'react';
import { Card, Button } from 'react-bootstrap';

function RecurringSplitsCard() {
  return (
    <Card className='mb-4'>
      <Card.Body>
        <Card.Title>Recurring Splits</Card.Title>
        <Card className='mb-2 bg-light border-0'>
          <Card.Body>
            <div className="fw-bold">Roommates Groceries</div>
            <div className="text-muted small">With Alex and Sarah</div>
            <div className="text-success small">Weekly • In 3 days</div>
            <Button variant="success" size="sm" className="mt-2">Start New</Button>
          </Card.Body>
        </Card>
        <Card className='mb-2 bg-light border-0'>
          <Card.Body>
            <div className="fw-bold">Family Shopping</div>
            <div className="text-muted small">With Emma and John</div>
            <div className="text-success small">Monthly • In 2 weeks</div>
            <Button variant="success" size="sm" className="mt-2">Start New</Button>
          </Card.Body>
        </Card>
        <Button variant="outline-success" className="w-100 mt-2">+ Create New Recurring Split</Button>
      </Card.Body>
    </Card>
  );
}

export default RecurringSplitsCard;