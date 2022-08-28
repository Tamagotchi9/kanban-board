import styles from "../assets/styles/ticket.module.scss";
import { useDrag } from "react-dnd";
import { useSelector } from "react-redux";
import { selectBoardLastColumn } from "../store/modules/board/selectors";
import classnames from "classnames";

export const Ticket = ({ fieldId, fieldIdx, id, title, description, date }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "ticket",
    item: { fromId: fieldId, ticketId: id, fieldIndex: fieldIdx },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  const lastCol = useSelector((state) => selectBoardLastColumn(state));

  return (
    <article
      className={classnames(styles.ticket, {
        [styles.ticketDone]: lastCol.id === fieldId,
      })}
      ref={drag}
    >
      <h3>{title}</h3>
      <p>{description}</p>
      <time>{date}</time>
    </article>
  );
};
