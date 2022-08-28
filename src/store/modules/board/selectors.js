export const selectBoardColumns = (state) => state.board;

export const selectBoardColumnTickets = (state, payload) =>
  selectBoardColumns(state).find((col) => col.id === payload).tickets;

export const selectBoardLastColumn = (state) =>
  selectBoardColumns(state)[selectBoardColumns(state).length - 1];
