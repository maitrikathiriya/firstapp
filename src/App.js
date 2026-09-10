import logo from './logo.svg';
import './App.css';
import './mycss.css'
import cs from './cssdata.module.css'
import  myimg1 from './image/3.png'
import { BiAddToQueue,BiCast   } from "react-icons/bi";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button,Card,Carousel,Figure,Form } from 'react-bootstrap';





function App() {
  return (
    <>
      <Button variant="secondary">Secondary</Button>
      <Button variant="success">Success</Button>
      <Button variant="warning">Warning</Button>
      <Button variant="danger">Danger</Button>
      <Button variant="info">Info</Button>
      <Button variant="light">Light</Button>
      <Button variant="dark">Dark</Button>
      <Button variant="link">Link</Button>

       <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={myimg1} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>

     <Figure>
      <Figure.Image
        width={171}
        height={180}
        alt="171x180"
        src={myimg1}
      />
      <Figure.Caption>
        Nulla vitae elit libero, a pharetra augue mollis interdum.
      </Figure.Caption>
    </Figure>

     <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Example textarea</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
    </Form>

    </>
      

  );
}

export default App;
