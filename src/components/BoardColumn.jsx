import { boardSlice } from "../store/modules/board";
import styles from "../assets/styles/field.module.scss";
import { Ticket } from "./Ticket";
import { useDrop } from "react-dnd";
import { useDispatch, useSelector } from "react-redux";
import { selectBoardColumnTickets } from "../store/modules/board/selectors";
import { useCallback, useContext } from "react";
import classnames from "classnames";
import { Theme } from "./Theme";

export const BoardColumn = ({ fieldId, name, fieldIdx }) => {
  const dispatch = useDispatch();

  const tickets = useSelector((state) =>
    selectBoardColumnTickets(state, fieldId)
  );

  const theme = useContext(Theme);

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "ticket",
    drop: ({ fromId, ticketId }) => addTicketToField(fromId, ticketId),
    canDrop: ({ fieldIndex }) => (fieldIdx - fieldIndex === 1 ? true : false),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const addTicketToField = useCallback(
    (fromId, ticketId) => {
      dispatch(boardSlice.actions.moveTicket({ fromId, ticketId, fieldId }));
    },
    [fieldId, dispatch]
  );

  return (
    <section
      className={classnames(styles.field, {
        [styles.fieldDark]: theme,
        [styles.fieldOver]: isOver,
      })}
    >
      <div className={styles.fieldHeader}>
        <h3 className={styles.fieldTitle}>{name}</h3>
      </div>
      <div className={styles.tickets} ref={drop}>
        {tickets.map((ticket) => (
          <Ticket
            key={ticket.id}
            id={ticket.id}
            fieldId={fieldId}
            fieldIdx={fieldIdx}
            title={ticket.title}
            description={ticket.description}
            date={ticket.date}
          />
        ))}
        {isOver && <span className={styles.targetText}>Drop here!</span>}
      </div>
    </section>
  );
};
