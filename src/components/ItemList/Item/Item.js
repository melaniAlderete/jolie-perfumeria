import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import "./Item.css";

function BasicExample({product}) {
  const navigate = useNavigate()

  const onClickBtn=(id, model)=>{

    navigate(`/productos/${model}/${id}`)
  }

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={product.image} />
      <Card.Body>
        <Card.Text>{product.brand}</Card.Text>
        <Card.Title>{product.model}</Card.Title>
        <Card.Text>${product.price}</Card.Text>
        <Button onClick={() =>{onClickBtn(product.id, product.model)}} variant="purple">Ver detalles</Button>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;