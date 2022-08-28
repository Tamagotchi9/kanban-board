import { useDispatch, useSelector } from "react-redux";
import styles from "../assets/styles/board.module.scss";
import { BoardColumn } from "./BoardColumn";
import { selectBoardColumns } from "../store/modules/board/selectors";
import { Header } from "../layout/Header";
import { Popup } from "./Popup";
import { TicketForm } from "./TicketForm";
import { boardSlice } from "../store/modules/board";
import { modalSlice } from "../store/modules/modal";
import classnames from "classnames";
import { useState } from "react";
import { Theme } from "./Theme";

export const Board = () => {
  const dispatch = useDispatch();
  const [theme, setTheme] = useState(false);
  const fields = useSelector((state) => selectBoardColumns(state));
  const createTicket = (ticket) => {
    dispatch(boardSlice.actions.createNewTicket(ticket));
    dispatch(modalSlice.actions.close());
  };

  return (
    <Theme.Provider value={theme}>
      <Header theme={theme} handleTheme={setTheme}></Header>
      <div
        className={classnames(styles.board, {
          [styles.boardDark]: theme,
        })}
      >
        {fields.map((field, index) => (
          <BoardColumn
            key={field.id}
            fieldId={field.id}
            fieldIdx={index}
            name={field.name}
          />
        ))}
      </div>
      <Popup>
        <TicketForm handleSubmit={createTicket} />
      </Popup>
    </Theme.Provider>
  );
};
