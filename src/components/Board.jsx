import { useDispatch, useSelector } from "react-redux";
import styles from "../assets/styles/board.module.scss";
import { BoardColumn } from "./BoardColumn";
import { selectBoardColumns } from "../store/modules/board/selectors";
import { Header } from "../layout/Header";
import { Popup } from "./Popup";
import { TicketForm } from "./TicketForm";
import { boardSlice } from "../store/modules/board";
import classnames from "classnames";
import { useCallback, useState } from "react";
import { Theme } from "./Theme";

export const Board = () => {
  const dispatch = useDispatch();
  const [theme, setTheme] = useState(false);
  const [modal, setModal] = useState(false);
  const fields = useSelector((state) => selectBoardColumns(state));

  const createTicket = useCallback(
    (ticket) => {
      dispatch(boardSlice.actions.createNewTicket(ticket));
    },
    [dispatch]
  );

  return (
    <Theme.Provider value={theme}>
      <Header
        theme={theme}
        handleTheme={setTheme}
        showModal={() => setModal(true)}
      ></Header>
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
      <Popup
        isOpen={modal}
        close={() => setModal(false)}
        modalTitle="Add ticket"
      >
        <TicketForm
          handleSubmit={createTicket}
          closeModal={() => setModal(false)}
        />
      </Popup>
    </Theme.Provider>
  );
};
