import { useState } from "react";
import { Col, Card, Button, Badge } from "react-bootstrap";
import CommentArea from "./CommentArea";

const SingleBook = props => {
  const [selected, setSelected] = useState(false);
  const [asin, setAsin] = useState("");

  const clickedBook = () => {
    if (selected) {
      setSelected(false);
      setAsin("");
    } else {
      setSelected(true);
      setAsin(props.asin);
    }
  };

  const clicked = selected ? "clicked" : "";

  return (
    <Col sm={12} md={4} xl={2} className="mt-3">
      <Card className="text-center">
        <Card.Img className="img" variant="top" src={props.cover} onClick={clickedBook} id={clicked} />
        <Card.Body>
          <Card.Title className="fs-5">{props.title}</Card.Title>
          <Card.Text>
            <p className="fw-bold text-danger">{props.category}</p>
          </Card.Text>
          <Button variant="success">
            Acquista <Badge className="bg-primary">€ {props.price}</Badge>
          </Button>
        </Card.Body>
      </Card>
      {selected && <CommentArea asin={props.asin} />}
    </Col>
  );
};

export default SingleBook;
