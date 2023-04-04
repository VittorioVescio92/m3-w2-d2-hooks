import { Component } from "react";
import SingleBook from "./SingleBook";
import { Container, Row, Form } from "react-bootstrap";

class BookList extends Component {
  state = {
    initialValue: null,
    searchString: "",
  };

  render() {
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
              value={this.state.searchString}
              onChange={e => {
                this.setState({ searchString: e.target.value });
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox"></Form.Group>
        </Form>
        <Row className="justify-content-center">
          {!this.state.searchString ? (
            <>
              {this.props.selectedBooks.map(selectedBook => (
                <SingleBook
                  cover={selectedBook.img}
                  title={selectedBook.title}
                  category={selectedBook.category}
                  price={selectedBook.price}
                  asin={selectedBook.asin}
                  key={selectedBook.asin}
                />
              ))}
            </>
          ) : (
            <>
              {this.props.selectedBooks
                .filter(selectedBook =>
                  selectedBook.title.toLowerCase().includes(this.state.searchString.toLowerCase())
                )
                .map(selectedBook => (
                  <SingleBook
                    cover={selectedBook.img}
                    title={selectedBook.title}
                    category={selectedBook.category}
                    price={selectedBook.price}
                    asin={selectedBook.asin}
                    key={selectedBook.asin}
                  />
                ))}
            </>
          )}
        </Row>
      </Container>
    );
  }
}

export default BookList;
