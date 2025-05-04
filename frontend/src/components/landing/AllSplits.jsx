import React, { useEffect, useState } from 'react';
import { Card, Table, Button, Form, InputGroup, Modal, Alert } from 'react-bootstrap';

function AllSplits() {
  const [splits, setSplits] = useState([]);
  const [search, setSearch] = useState('');
  const [editSplit, setEditSplit] = useState(null);
  const [showEdit, setShowEdit] = useState(false);
  const [notification, setNotification] = useState('');
  const [confirmDelete, setConfirmDelete] = useState({ show: false, id: null });

  // Fetch all splits
  const fetchSplits = () => {
    fetch('/api/splits')
      .then(res => res.json())
      .then(data => setSplits(data));
  };

  useEffect(() => {
    fetchSplits();
  }, []);

  // Handle delete
  const handleDelete = async (id) => {
    await fetch(`/api/splits/${id}`, { method: 'DELETE' });
    setNotification('Split deleted');
    setTimeout(() => setNotification(''), 2000);
    fetchSplits();
    setConfirmDelete({ show: false, id: null });
  };

  // Handle edit
  const handleEdit = (split) => {
    setEditSplit({ ...split, members: split.members.join(', ') });
    setShowEdit(true);
  };

  const handleEditChange = (e) => {
    setEditSplit({ ...editSplit, [e.target.name]: e.target.value });
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    await fetch(`/api/splits/${editSplit._id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: editSplit.name,
        members: editSplit.members.split(',').map(m => m.trim())
      }),
    });
    setShowEdit(false);
    setNotification('Split updated');
    setTimeout(() => setNotification(''), 2000);
    fetchSplits();
  };

  // Filter splits by search
  const filteredSplits = splits.filter(split =>
    split.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Card className="p-4">
      <h2 className="fw-bold mb-3">All Splits</h2>
      {notification && (
        <Alert variant="success" className="text-center">{notification}</Alert>
      )}
      <InputGroup className="mb-3" style={{ maxWidth: 400 }}>
        <Form.Control
          placeholder="Search splits..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
      </InputGroup>
      <Table hover responsive>
        <thead>
          <tr>
            <th>Split Name</th>
            <th>Date</th>
            <th>Members</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredSplits.map(split => (
            <tr key={split._id}>
              <td>{split.name}</td>
              <td>{split.createdAt ? new Date(split.createdAt).toLocaleDateString() : '-'}</td>
              <td>
                {split.members && split.members.map((m, i) => (
                  <span key={i} className="badge bg-light text-dark me-1">{m}</span>
                ))}
              </td>
              <td>
                <Button size="sm" variant="outline-primary" className="me-2" onClick={() => handleEdit(split)}>
                  Edit
                </Button>
                <Button size="sm" variant="outline-danger" onClick={() => setConfirmDelete({ show: true, id: split._id })}>
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      {filteredSplits.length === 0 && (
        <div className="text-center text-muted">No splits found.</div>
      )}

      {/* Edit Modal */}
      <Modal show={showEdit} onHide={() => setShowEdit(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Split</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleEditSubmit}>
            <Form.Group className="mb-2">
              <Form.Label>Split Name</Form.Label>
              <Form.Control
                name="name"
                value={editSplit?.name || ''}
                onChange={handleEditChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Label>Members (comma separated)</Form.Label>
              <Form.Control
                name="members"
                value={editSplit?.members || ''}
                onChange={handleEditChange}
                required
              />
            </Form.Group>
            <Button type="submit" variant="success">Update</Button>
          </Form>
        </Modal.Body>
      </Modal>

      {/* Delete Confirmation Modal */}
      <Modal show={confirmDelete.show} onHide={() => setConfirmDelete({ show: false, id: null })}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Split</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to delete this split?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setConfirmDelete({ show: false, id: null })}>
            Cancel
          </Button>
          <Button variant="danger" onClick={() => handleDelete(confirmDelete.id)}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </Card>
  );
}

export default AllSplits;