import { boardSlice } from "../store/modules/board";
import styles from "../assets/styles/field.module.scss";
import { Ticket } from "./Ticket";
import { useDrop } from "react-dnd";
import { useDispatch, useSelector } from "react-redux";
import { selectBoardColumnTickets } from "../store/modules/board/selectors";

export const BoardColumn = ({ fieldId, name, fieldIdx }) => {
  const dispatch = useDispatch();

  const tickets = useSelector((state) =>
    selectBoardColumnTickets(state, fieldId)
  );

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "ticket",
    drop: ({ fromId, ticketId }) => addTicketToField(fromId, ticketId),
    canDrop: ({ fieldIndex }) => (fieldIdx - fieldIndex === 1 ? true : false),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const addTicketToField = (fromId, ticketId) => {
    dispatch(boardSlice.actions.moveTicket({ fromId, ticketId, fieldId }));
  };

  return (
    <div className={styles.field}>
      <div className={styles.fieldHeader}>
        <h3>{name}</h3>
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
      </div>
    </div>
  );
};
