import { ListGroup } from "react-bootstrap";
import SingleComment from "./SingleComment";

const CommentsList = comments => {
  return (
    <>
      <ListGroup className="d-flex flex-column align-items-center">
        {comments.map(comment => (
          <SingleComment key={comment._Id} author={comment.author} comment={comment.comment} rate={comment.rate} />
        ))}
      </ListGroup>
    </>
  );
};

export default CommentsList;
