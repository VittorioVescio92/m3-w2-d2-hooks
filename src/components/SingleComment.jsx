import { ListGroupItem } from "react-bootstrap";

const SingleComment = ({ author, comment, rate }) => {
  return (
    <ListGroupItem>
      <h5>Author: {author}</h5>
      <p>Comment: {comment}</p>
      <p>Rate: {rate}</p>
    </ListGroupItem>
  );
};

export default SingleComment;
