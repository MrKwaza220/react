<<<<<<< HEAD

=======
import { useState } from "react";
import { ControlledForm } from "./components/controlledform/ControlledForm";
import { Modal } from "./layout/Modal";
import { ControlledModal } from "./components/controlledmodal/ControlledModal";
import { UncontrolledModal } from "./components/uncontrolledmodal/UncontrolledModal";
>>>>>>> 6d56fdd04dc774d2c0d3e20cf6a5d3dfc4a38906

function App() {
  const [shouldShowModal, setShouldShowModal] = useState(false);
  return (
<<<<<<< HEAD
    <>
      
    </>
=======
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
>>>>>>> 6d56fdd04dc774d2c0d3e20cf6a5d3dfc4a38906
  );
}

export default App;
