import { Component } from "react";
import { Col, Card, Button, Badge } from "react-bootstrap";
import CommentArea from "./CommentArea";

class SingleBook extends Component {
  state = {
    selected: false,
    asin: "",
  };

  clickedBook = () => {
    if (this.state.selected) {
      this.setState({ selected: false, asin: "" });
    } else {
      this.setState({ selected: true, asin: this.props.asin });
    }
  };

  render() {
    const clicked = this.state.selected ? "clicked" : "";

    return (
      <Col sm={12} md={4} xl={2} key={this.props.asin} className="mt-3">
        <Card className="text-center">
          <Card.Img className="img" variant="top" src={this.props.cover} onClick={this.clickedBook} id={clicked} />
          <Card.Body>
            <Card.Title className="fs-5">{this.props.title}</Card.Title>
            <Card.Text>
              <p className="fw-bold text-danger">{this.props.category}</p>
            </Card.Text>
            <Button variant="success">
              Acquista <Badge className="bg-primary">€ {this.props.price}</Badge>
            </Button>
          </Card.Body>
        </Card>
        {this.state.selected && <CommentArea asin={this.props.asin} />}
      </Col>
    );
  }
}

export default SingleBook;
