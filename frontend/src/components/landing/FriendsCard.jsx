import React from 'react';
import { Card } from 'react-bootstrap';

function FriendsCard() {
  return (
    <Card className='mb-4'>
      <Card.Body>
        <Card.Title>Friends</Card.Title>
        <Card className='d-flex flex-column m-2 bg-light'>
          <Card.Body>
            <Card.Title>Alex Johnson</Card.Title>
            <Card.Text>Owes you $25</Card.Text>
          </Card.Body>
          <Card.Body>
            <Card.Title>Sarah Williams</Card.Title>
            <Card.Text>You owe $12</Card.Text>
          </Card.Body>
          <Card.Body>
            <Card.Title>Mike Brown</Card.Title>
            <Card.Text>Owes you $2</Card.Text>
          </Card.Body>
        </Card>
      </Card.Body>
    </Card>
  );
}

export default FriendsCard;