import Card from "react-bootstrap/Card";
import "./index.scss";

function ReviewCard({ ...props }) {
  return (
    <Card style={{ width: "300px", height: "180px",marginRight: "30px", }}>
      <Card.Body>
        <div className="d-flex align-items-center w-100" style={{position: "relative"}}>
          <img className="user-img" src={props.data.img} alt="ima" />
          <div className="d-flex flex-column text-pr">
            <span className="r-name">
              <strong>{props.data.name}</strong>
            </span>
            <span className="l-name">{props.data.locs}</span>
          </div>
          <div className="d-flex rating">
            <span>{props.data.rating}</span>
            <img src={props.star} alt="star" />
          </div>
        </div>
        <span className="rating-desc">{props.data.description}</span>
      </Card.Body>
    </Card>
  );
}

export default ReviewCard;
