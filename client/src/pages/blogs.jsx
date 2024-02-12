import React from 'react'
import { Card, Button } from 'react-bootstrap';

const mockProducts = [
  { id: 1, name: 'Product 1', price: 19.99, image: 'https://m.media-amazon.com/images/I/419IdaXiS4L._AC_UF226,226_FMjpg_.jpg' },
  { id: 2, name: 'Product 2', price: 29.99, image: 'https://m.media-amazon.com/images/I/51g-LSb3emL._AC_UF226,226_FMjpg_.jpg' },
  { id: 3, name: 'Product 2', price: 29.99, image: 'https://m.media-amazon.com/images/I/41X6hey-ExL._AC_UF226,226_FMjpg_.jpg' },
  { id: 4, name: 'Product 2', price: 29.99, image: 'https://m.media-amazon.com/images/I/611mbcpYzFL._AC_UY327_FMwebp_QL65_.jpg' },
  { id: 5, name: 'Product 2', price: 29.99, image: 'https://m.media-amazon.com/images/I/71Yw+g9EMlL._AC_UY327_FMwebp_QL65_.jpg' },
  { id: 6, name: 'Product 2', price: 29.99, image: 'https://m.media-amazon.com/images/I/51B2PhXLG0S._AC_UY327_FMwebp_QL65_.jpg' },
  { id: 7, name: 'Product 2', price: 29.99, image: 'https://m.media-amazon.com/images/I/61h14q8wCKL._AC_UY327_QL65_.jpg' },
  { id: 8, name: 'Product 2', price: 29.99, image: 'https://m.media-amazon.com/images/I/81L6069AwHL._AC_UY327_FMwebp_QL65_.jpg' },
  { id: 9, name: 'Product 2', price: 29.99, image: 'https://m.media-amazon.com/images/I/61Tpb6zICUL._AC_UY327_FMwebp_QL65_.jpg' },
  { id: 10, name: 'Product 2', price: 29.99, image: 'https://m.media-amazon.com/images/I/51VrXJIJe-L._AC_UY327_FMwebp_QL65_.jpg' },
  { id: 11, name: 'Product 2', price: 29.99, image: 'https://m.media-amazon.com/images/I/71Xk1o3s9cL._AC_UL480_FMwebp_QL65_.jpg' },
  { id: 12, name: 'Product 2', price: 29.99, image: 'https://m.media-amazon.com/images/I/71hCoYbSRzL._AC_UL480_FMwebp_QL65_.jpg' },
  // Add more products as needed
];
function Blogs() {
  return (
    <div style={appStyle}>
      <h1>Stark 7 Products</h1>
      {mockProducts.map(product => (
        <Card key={product.id} style={{...productContainerStyle, boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'}}>
          <Card.Img
            variant="top"
            src={product.image}
            alt={product.name}
            style={{ ...productImageStyle, backgroundImage: `url(${product.image})` }}
          />
          <Card.Body>
            <Card.Title style={productNameStyle}>{product.name}</Card.Title>
            <Card.Text style={productPriceStyle}>${product.price.toFixed(2)}</Card.Text>
            <Button variant="primary" style={addToCartButtonStyle}>
              Add to Cart
            </Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  )
}


// Inline styles
const appStyle = {
  textAlign: 'center',
  padding: '20px',
};

const productContainerStyle = {
  width: '18rem',
  margin: '10px',
  display: 'inline-block',
};

const productImageStyle = {
  height: '80px', 
  width: '50%', 
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  justifyContent:'center',
};


const productNameStyle = {
  fontSize: '18px',
};

const productPriceStyle = {
  margin: '5px 0',
};

const addToCartButtonStyle = {
  background: '#007bff',
  color: '#fff',
  padding: '8px 15px',
  border: 'none',
  cursor: 'pointer',
};

export default Blogs
