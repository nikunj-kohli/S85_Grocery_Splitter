import React from 'react';
import { Card } from 'react-bootstrap';

function RecentSplitsCard() {
  return (
    <Card className='mb-4'>
      <Card.Body>
        <Card.Title>Recent Splits</Card.Title>
        <Card className='d-flex flex-column m-2 bg-light'>
          <Card.Body>
            <Card.Title>Weekend Groceries</Card.Title>
          </Card.Body>
          <Card.Body>
            <Card.Title>Dinner Party</Card.Title>
          </Card.Body>
          <Card.Body>
            <Card.Title>Camping Trip</Card.Title>
          </Card.Body>
        </Card>
      </Card.Body>
    </Card>
  );
}

export default RecentSplitsCard;