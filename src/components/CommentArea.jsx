import { useState, useEffect } from "react";
import CommentsList from "./CommentsList";
import AddComment from "./AddComment";

const key =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDJhYzMxMjY4MzQzMTAwMTRkZWE3NjEiLCJpYXQiOjE2ODA1MjQwNTAsImV4cCI6MTY4MTczMzY1MH0.LP8fehJyM-iPCgOwm4Qa_PyYUIVCO9giwhA8P8ogogQ";

const CommentArea = asin => {
  const [bookComments, setBookComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchComments = async () => {
    try {
      const response = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${asin}`, {
        headers: {
          Authorization: key,
        },
      });
      const data = await response.json();
      setBookComments(data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchComments();
  }, [asin]);

  return (
    <>
      {isLoading && <div>Loading...</div>}
      {!isLoading && bookComments.length === 0 && <div>Non ci sono commenti per questo libro.</div>}
      {!isLoading && bookComments.length > 0 && <CommentsList comments={bookComments} />}
      <AddComment asin={asin} fetchComments={fetchComments} />
    </>
  );
};

export default CommentArea;
