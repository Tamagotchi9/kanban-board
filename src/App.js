import { Board } from "./components/Board";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Popup } from "./components/Popup";
import { BoardSettingsForm } from "./components/BoardSettingsForm";
import { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { boardSlice } from "./store/modules/board";

function App() {
  const dispatch = useDispatch();
  const [modal, setModal] = useState(true);

  const onCloseSetupForm = useCallback(() => {
    dispatch(boardSlice.actions.setBoard([]));
    setModal(false);
  }, [setModal, dispatch]);

  return (
    <DndProvider backend={HTML5Backend}>
      <Popup
        isOpen={modal}
        close={onCloseSetupForm}
        modalTitle="Setup your board"
      >
        <BoardSettingsForm closeModal={() => setModal(false)} />
      </Popup>
      <Board />
    </DndProvider>
  );
}

export default App;
