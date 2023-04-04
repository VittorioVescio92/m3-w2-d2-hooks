import { useState } from "react";
import SingleBook from "./SingleBook";
import { Container, Row, Form } from "react-bootstrap";

const BookList = props => {
  const [searchString, setSearchString] = useState("");

  return (
    <Container className="container-fluid mb-4">
      <Form
        onSubmit={e => {
          e.preventDefault();
        }}
      >
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Libro</Form.Label>
          <Form.Control
            type="text"
            placeholder="Inserisci il nome del libro che cerchi"
            value={searchString}
            onChange={e => {
              setSearchString(e.target.value);
            }}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox"></Form.Group>
      </Form>
      <Row className="justify-content-center">
        {!searchString ? (
          <>
            {props.selectedBooks.map(selectedBook => (
              <SingleBook
                cover={selectedBook.img}
                title={selectedBook.title}
                category={selectedBook.category}
                price={selectedBook.price}
                key={selectedBook.asin}
              />
            ))}
          </>
        ) : (
          <>
            {props.selectedBooks
              .filter(selectedBook => selectedBook.title.toLowerCase().includes(searchString.toLowerCase()))
              .map(selectedBook => (
                <SingleBook
                  cover={selectedBook.img}
                  title={selectedBook.title}
                  category={selectedBook.category}
                  price={selectedBook.price}
                  key={selectedBook.asin}
                />
              ))}
          </>
        )}
      </Row>
    </Container>
  );
};

export default BookList;
