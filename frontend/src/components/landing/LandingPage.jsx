import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Sidebar from './Sidebar';
import WelcomeCard from './WelcomeCard';
import RecentSplitsCard from './RecentSplitsCard';
import FriendsCard from './FriendsCard';
import YourBalanceCard from './YourBalanceCard';
import TransactionsCard from './TransactionsCard';
import RecurringSplitsCard from './RecurringSplitsCard';

function LandingPage({ rightContent }) {
  return (
    <Container fluid className="p-0" style={{ backgroundColor: '#FAFFE8', minHeight: '100vh' }}>
      <Row className="g-0">
        <Col md={2} className="bg-white border-end min-vh-100 p-0">
          <Sidebar />
        </Col>
        <Col md={10} className="p-4">
          {rightContent ? (
            rightContent
          ) : (
            <>
              <WelcomeCard />
              <Row className="g-4">
                <Col md={4}><RecentSplitsCard /></Col>
                <Col md={4}><FriendsCard /></Col>
                <Col md={4}><YourBalanceCard /></Col>
              </Row>
              <Row className="g-4 mt-2">
                <Col md={6}><TransactionsCard /></Col>
                <Col md={6}><RecurringSplitsCard /></Col>
              </Row>
            </>
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default LandingPage;