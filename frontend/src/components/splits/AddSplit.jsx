import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

const USERS = ['Alice', 'Bob', 'Charlie', 'David']; // Example user list

function AddSplit({ onSplitAdded }) {
  const [name, setName] = useState('');
  const [members, setMembers] = useState('');
  const [createdBy, setCreatedBy] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/splits', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name,
        members: members.split(',').map(m => m.trim()),
        created_by: createdBy
      }),
    });
    if (res.ok) {
      setName('');
      setMembers('');
      setCreatedBy('');
      if (onSplitAdded) onSplitAdded(name);
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
        <Form.Label>Members (comma separated)</Form.Label>
        <Form.Control
          value={members}
          onChange={e => setMembers(e.target.value)}
          required
        />
      </Form.Group>
      <Form.Group className="mb-2">
        <Form.Label>Created By</Form.Label>
        <Form.Select
          value={createdBy}
          onChange={e => setCreatedBy(e.target.value)}
          required
        >
          <option value="">Select User</option>
          {USERS.map(user => (
            <option key={user} value={user}>{user}</option>
          ))}
        </Form.Select>
      </Form.Group>
      <Button type="submit" variant="success">Add Split</Button>
    </Form>
  );
}

export default AddSplit;