import Name from './components/Name';
import Description from './components/Description';
// import Image from './components/Image';
import Price from './components/Price';
import {Card} from 'react-bootstrap'
import Product from './Product'
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  const firstName = '';
  const pro_imag = Product.image;
  return (
    <>
    <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={pro_imag} />
        <Card.Body>
          <Card.Title>
              <Name />
          </Card.Title>
          <Card.Text>
              <Description />
              <Price />
          </Card.Text>
        </Card.Body>
    </Card>
    <p>Hello, {firstName ? firstName : "there"}!</p>
    </>
  );
}

export default App;
