import "./App.css";
import Loader from "./components/loader/Loader";
import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";

import ModalQuiz from "./components/modal/ModalQuiz";

function App() {
  const [loaderVisible, setLoaderInv] = useState(true);
  const [modalShow, setModalShow] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoaderInv(false);
    }, 3000);
  }, []);

  return (
    <div className="App">
      {loaderVisible && <Loader />}
      <Button variant="primary" onClick={() => setModalShow(true)}>
        Launch vertically centered modal
      </Button>

      <ModalQuiz show={modalShow} onHide={() => setModalShow(false)} />
    </div>
  );
}

export default App;
