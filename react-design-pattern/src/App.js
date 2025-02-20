import { useState } from "react";
import { ControlledForm } from "./components/controlledform/ControlledForm";
import { Modal } from "./layout/Modal";
import { ControlledModal } from "./components/controlledmodal/ControlledModal";
import { UncontrolledModal } from "./components/uncontrolledmodal/UncontrolledModal";

function App() {
  const [shouldShowModal, setShouldShowModal] = useState(false);
  return (
      <>
          <ControlledModal
          shouldShow={shouldShowModal}
          onRequestClose={() => setShouldShowModal(false)}
          >
            <h1>Controlled Modal</h1>
          </ControlledModal>
          <button onClick={() => setShouldShowModal(!shouldShowModal)}>
          
            {shouldShowModal ? "Hide Modal" : "Show Modal"}
          </button>
      </>
  );
}

export default App;
