import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function TitleCard(props) {
  return (
    <div style={{ cursor: 'pointer' }}>
      <Card className='div_hover' style={{ width: '18rem' }}>
        <Card.Img variant="top" src={props.img} />
        <Card.Body>
          <Card.Title className='text-center'>{props.title}</Card.Title>
          <Card.Text>
            {props.description}
          </Card.Text>
          <div class="text-center">
            <Button variant="primary">Login</Button>
            <Button className="m-2" variant="secondary">Register</Button> </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default TitleCard;
