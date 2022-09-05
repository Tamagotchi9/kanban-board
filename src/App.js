import { Board } from "./components/Board";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Popup } from "./components/Popup";
import { BoardSettingsForm } from "./components/BoardSettingsForm";
import { useState } from "react";

function App() {
  const [modal, setModal] = useState(true);

  return (
    <DndProvider backend={HTML5Backend}>
      <Popup
        isOpen={modal}
        close={() => setModal(false)}
        modalTitle="Setup your board"
      >
        <BoardSettingsForm closeModal={() => setModal(false)} />
      </Popup>
      <Board />
    </DndProvider>
  );
}

export default App;
