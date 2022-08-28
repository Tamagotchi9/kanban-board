import { nanoid } from "@reduxjs/toolkit";
import { useReducer } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const reducer = (state, action) => {
  return { ...state, [action.type]: action.payload };
};

export const TicketForm = ({ handleSubmit }) => {
  const [state, dispatch] = useReducer(reducer, {
    id: nanoid(),
    title: "",
    description: "",
    authorName: "",
    date: Date.now(),
  });
  return (
    <Form
      onChange={(e) =>
        dispatch({ type: e.target.name, payload: e.target.value })
      }
    >
      <Form.Group className="mb-3">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" name="title" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Description</Form.Label>
        <Form.Control type="text" name="description" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Author name</Form.Label>
        <Form.Control type="text" name="authorName" />
      </Form.Group>
      <Button variant="primary" onClick={() => handleSubmit(state)}>
        Add
      </Button>
    </Form>
  );
};
