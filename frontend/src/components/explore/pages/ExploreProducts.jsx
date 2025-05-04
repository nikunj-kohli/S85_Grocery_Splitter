import React from 'react';
import { Button, Form, InputGroup, Badge } from 'react-bootstrap';

const categories = [
  'All', 'Produce', 'Dairy', 'Meat', 'Bakery', 'Frozen', 'Pantry', 'Beverages', 'Snacks'
];

const products = [
  { name: 'Organic Bananas', price: 1.99, category: 'Produce' },
  { name: 'Whole Milk', price: 3.49, category: 'Dairy' },
  { name: 'Sourdough Bread', price: 4.99, category: 'Bakery' },
  { name: 'Ground Beef', price: 6.99, category: 'Meat' },
  { name: 'Frozen Pizza', price: 5.99, category: 'Frozen' },
  { name: 'Pasta Sauce', price: 2.99, category: 'Pantry' },
  { name: 'Orange Juice', price: 3.99, category: 'Beverages' },
  { name: 'Potato Chips', price: 2.49, category: 'Snacks' },
  { name: 'Avocados', price: 2.99, category: 'Produce' },
  { name: 'Cheddar Cheese', price: 4.49, category: 'Dairy' },
  { name: 'Bagels', price: 3.99, category: 'Bakery' },
  { name: 'Chicken Breast', price: 7.99, category: 'Meat' },
];

function ExploreProducts() {
  const [selectedCategory, setSelectedCategory] = React.useState('All');
  const [search, setSearch] = React.useState('');

  const filteredProducts = products.filter(
    p =>
      (selectedCategory === 'All' || p.category === selectedCategory) &&
      p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h2 className="fw-bold mb-4">Explore Products</h2>
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Search products..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <Button variant="outline-success">Filters</Button>
      </InputGroup>
      <div className="mb-3">
        {categories.map(cat => (
          <Badge
            key={cat}
            pill
            bg={selectedCategory === cat ? 'success' : 'light'}
            text={selectedCategory === cat ? 'light' : 'dark'}
            className="me-2 mb-2"
            style={{ cursor: 'pointer' }}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </Badge>
        ))}
      </div>
      <div className="row">
        {filteredProducts.map((p, i) => (
          <div className="col-md-3 mb-4" key={i}>
            <div className="card h-100 bg-light">
              <div className="card-body d-flex flex-column justify-content-between">
                <div>
                  <span className="badge bg-success mb-2">{p.category}</span>
                  <h5 className="card-title">{p.name} <span className="text-success">${p.price.toFixed(2)}</span></h5>
                </div>
                <Button variant="success" className="mt-2">Add to Cart</Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ExploreProducts;