import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./card.css"

function PlainCard(props) {
  return (


    <div className={props.selected ? "p-2 selected border" : "p-2 div_hover border"}
      style={{ width: '18rem', height: '7rem', boxShadow: "2px 2px 2px 2px #888888" }}>
      {
        <div className='d-flex flex-row' >
          <div className="d-flex flex-column align-item-center" style={{ cursor: 'pointer' }}>
            {
              props.displayIcon &&
              <i className="fa fa-user fa-3x mt-3" > </i>
            }
          </div>
          <div className='d-flex flex-column'>
            <div className="d-flex text-center ps-4 fw-bold">
              {props.title}
            </div>
            <div className="ps-4">
              {props.description}
            </div>
          </div>

        </div>
      }

    </div>
  );
}

export default PlainCard;
