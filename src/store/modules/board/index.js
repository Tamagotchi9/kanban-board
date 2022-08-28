import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

export const boardSlice = createSlice({
  name: "board",
  initialState: [
    {
      id: nanoid(),
      name: "refinement",
      tickets: [
        {
          id: "1xd",
          title: "Checkout",
          description: "create checkout",
          date: Date.now(),
        },
      ],
    },
    { id: nanoid(), name: "to do", tickets: [] },
    { id: nanoid(), name: "in progress", tickets: [] },
    { id: nanoid(), name: "tech review", tickets: [] },
    { id: nanoid(), name: "ready for deployment", tickets: [] },
    {
      id: nanoid(),
      name: "QA",
      tickets: [
        {
          id: "2fe",
          title: "Wishlist",
          description: "create wishlist",
          date: Date.now(),
        },
        {
          id: "7tx",
          title: "Toggle footer",
          description: "create sliding footer",
          date: "2022-09-01",
        },
      ],
    },
    { id: nanoid(), name: "closed", tickets: [] },
  ],
  reducers: {
    moveTicket: (state, { payload }) => {
      const colIndex = state.findIndex((col) => col.id === payload.fromId);
      const ticketIndex = state[colIndex].tickets.findIndex(
        (ticket) => ticket.id === payload.ticketId
      );
      const newColIndex = state.findIndex((col) => col.id === payload.fieldId);
      const ticket = state[colIndex].tickets[ticketIndex];

      // add ticket to new column
      state[newColIndex].tickets.push(ticket);
      // remove ticket from previous column
      state[colIndex].tickets.splice(ticketIndex, 1);
    },

    createNewTicket: (state, { payload }) => {
      state[0].tickets.push(payload);
    },
  },
});
