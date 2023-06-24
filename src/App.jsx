import { useState } from "react";
import AddButton from "./components/AddButton.jsx";
import Popup from "./components/Popup.jsx";
import "./index.css";

function App() {
  const [popup, setPopup] = useState(false);

  const openPopup = () => {
    setPopup(true);
  };

  const closePopup = () => {
    setPopup(false);
  };

  return (
    <>
      <h1>Gallery</h1>
      <AddButton onAddPhoto={openPopup} />
      {popup && <Popup handleClose={closePopup} />}
    </>
  );
}

export default App;
