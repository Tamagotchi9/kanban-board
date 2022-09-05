import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { InputGroup } from "react-bootstrap";
import { useState } from "react";
import { MockColumn } from "./MockColumn";
import { useDispatch } from "react-redux";
import { boardSlice } from "../store/modules/board";
import { nanoid } from "@reduxjs/toolkit";

export const BoardSettingsForm = ({ closeModal }) => {
  const dispatch = useDispatch();
  const [isCustom, setIsCustom] = useState(false);
  const [board, setBoard] = useState([]);
  const [colName, setColName] = useState("");

  const addField = () => {
    if (colName !== "") {
      setBoard((board) => [
        ...board,
        { id: nanoid(), name: colName, tickets: [] },
      ]);
    }
    setColName("");
  };

  const createBoard = () => {
    dispatch(boardSlice.actions.setBoard(board));
    closeModal();
  };

  return (
    <>
      <div className="text-center">
        {isCustom ? "Custom Board" : "Default Board"}
      </div>
      <Form.Check
        className="mb-3 d-flex justify-content-center"
        value={isCustom}
        type="switch"
        id="custom-switch"
        onChange={() => setIsCustom(!isCustom)}
      />

      {isCustom && (
        <>
          <Form>
            <InputGroup className="mb-3">
              <Form.Control
                value={colName}
                onChange={(event) => setColName(event.target.value)}
                placeholder="create board column"
              />
              <Button onClick={addField} variant="outline-secondary">
                Create
              </Button>
            </InputGroup>
          </Form>
          <hr />
          {!!board.length && (
            <>
              <h4>Board will have columns:</h4>
              <div>
                {board.map((col) => (
                  <MockColumn key={col.id} name={col.name} />
                ))}
              </div>
            </>
          )}
        </>
      )}
      <div className="d-flex justify-content-center">
        <Button disabled={isCustom && !board.length} onClick={createBoard}>
          Setup
        </Button>
      </div>
    </>
  );
};
