import { Component } from "react";
import { ListGroup } from "react-bootstrap";
import SingleComment from "./SingleComment";
class CommentsList extends Component {
  render() {
    return (
      <>
        <ListGroup className="d-flex flex-column align-items-center">
          {this.props.comments.map(comment => (
            <SingleComment key={comment._Id} author={comment.author} comment={comment.comment} rate={comment.rate} />
          ))}
        </ListGroup>
      </>
    );
  }
}
export default CommentsList;
