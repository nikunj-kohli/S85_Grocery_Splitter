import React from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';

function WelcomeCard() {
  return (
    <Card className='mb-4'>
      <Card.Body>
        <Card.Title className='text-center mt-2'>Welcome to Grocery Splitter</Card.Title>
        <Card.Text className='text-center'>
          Split grocery expenses with friends and family easily
        </Card.Text>
        <Row className='mx-3'>
          <Col className='d-flex mb-2'>
            <Card className='flex-fill mb-3' style={{ backgroundColor: '#FAFFE8' }}>
              <Card.Body>
                <Card.Title className='mx-3'>Create a New Split</Card.Title>
                <Card.Text className='mx-3'>Start a new grocery split with friends</Card.Text>
                <Button className='mx-3' variant='outline-success' style={{ width: '100px' }}>New Split</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col className='d-flex mb-2'>
            <Card className='flex-fill mb-3' style={{ backgroundColor: '#FAFFE8' }}>
              <Card.Body>
                <Card.Title className='mx-3'>Join an existing split</Card.Title>
                <Card.Text className='mx-3'>Enter a code to join a friend's grocery split</Card.Text>
                <Row className='mx-3'>
                  <textarea className="form-control mb-1" style={{ width: '200px', height: '20px' }}></textarea>
                  <Button variant='success' style={{ width: '100px' }} className='mx-3 mb-2'>Join</Button>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}

export default WelcomeCard;