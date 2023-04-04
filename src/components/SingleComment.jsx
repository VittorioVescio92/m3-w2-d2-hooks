import { ListGroupItem } from "react-bootstrap";
import { Component } from "react";

class SingleComment extends Component {
  render() {
    return (
      <ListGroupItem>
        <h5>Author: {this.props.author}</h5>
        <p>Comment: {this.props.comment}</p>
        <p>Rate: {this.props.rate}</p>
      </ListGroupItem>
    );
  }
}

export default SingleComment;
