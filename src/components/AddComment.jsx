import { useState } from "react";
import { Form, Button } from "react-bootstrap";
const token =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDJhYzMxMjY4MzQzMTAwMTRkZWE3NjEiLCJpYXQiOjE2ODA1MjQwNTAsImV4cCI6MTY4MTczMzY1MH0.LP8fehJyM-iPCgOwm4Qa_PyYUIVCO9giwhA8P8ogogQ";

const AddComment = props => {
  const [commentObj, setCommentObj] = useState({
    comment: "",
    rate: "1",
    elementId: props.asin,
  });

  const sendComment = event => {
    event.preventDefault();
    fetch(`https://striveschool-api.herokuapp.com/api/comments/`, {
      method: "POST",
      body: JSON.stringify(commentObj),
      headers: {
        Authorization: token,
        "Content-Type": "application/json",
      },
    })
      .then(response => {
        if (response.ok) {
          alert("Commento inviato");
          props.fetchComment();
        }
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <>
      <Form onSubmit={sendComment}>
        <Form.Group controlId="comment">
          <Form.Label>Recensione:</Form.Label>
          <Form.Control
            placeholder="Inserisci il commento"
            as="textarea"
            value={commentObj.comment}
            onChange={event => {
              setCommentObj({
                ...commentObj,
                comment: event.target.value,
              });
            }}
            rows="3"
          />
        </Form.Group>

        <Form.Group controlId="formRating">
          <Form.Label>Voto:</Form.Label>
          <Form.Control
            as="select"
            value={commentObj.rate}
            onChange={event => {
              setCommentObj({
                ...commentObj,
                rate: event.target.value,
              });
            }}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </Form.Control>
        </Form.Group>

        <Button variant="primary" type="submit">
          Aggiungi recensione
        </Button>
      </Form>
    </>
  );
};

export default AddComment;
