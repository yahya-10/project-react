import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container , Row , Col , Card, CardImg, Form } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Container>
        <Form>
          <Row>
            <Col>
            <Form.Group>
            <Form.Label>Email Address</Form.Label>
            <Form.Control type="email" placeholder="Example@gmail.com" />
            <Form.Text className="text-muted">
              We'll never share your email address, Trust us.
            </Form.Text>
          </Form.Group>
          </Col>
          <Col>
          <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="password" />
            
          </Form.Group>
            </Col>
          </Row>
          <Button variant="secondary" type="submit">Login</Button>
        </Form>

        <Card className="nb-3" style={{ color: "#000"}}>
          <Card.Img src="https://picsum.photos/id/237/200/50" />
          <Card.Body>
            <Card.Title>
              card example
            </Card.Title>
            <Card.Text>
              Collection of the best cards 
            </Card.Text>
            <Button>Get this card NOW </Button>
          </Card.Body>
          </Card>
        <Button variant="primary">Read more</Button>
        </Container>
      </header>
    </div>
  );
}

export default App;
