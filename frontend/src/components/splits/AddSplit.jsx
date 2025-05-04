import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

function AddSplit({ onSplitAdded }) {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/splits', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, amount }),
    });
    if (res.ok) {
      setName('');
      setAmount('');
      if (onSplitAdded) onSplitAdded(name); // Pass split name here
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-2">
        <Form.Label>Split Name</Form.Label>
        <Form.Control
          value={name}
          onChange={e => setName(e.target.value)}
          required
        />
      </Form.Group>
      <Form.Group className="mb-2">
        <Form.Label>Amount</Form.Label>
        <Form.Control
          type="number"
          value={amount}
          onChange={e => setAmount(e.target.value)}
          required
        />
      </Form.Group>
      <Button type="submit" variant="success">Add Split</Button>
    </Form>
  );
}

export default AddSplit;