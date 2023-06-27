import { useState } from "react";
import Popup from "./components/Popup.jsx";
import Header from "./components/Header";
import Upload from "./components/Upload";
import Title from "./components/Title";
import Row from "./components/Row";
import Foot from "./components/Foot";
import ImageObject from "./Imageobject";
import "./App.css";

function App() {
  const [popup, setPopup] = useState(false);
  const [imageSelected, setImageSelected] = useState(null);

  // (temporary) this will eventually be an api call that gets all of the images made by this author
  let images = [
    new ImageObject(
      "src/components/images/1.jpg",
      "title",
      "2023",
      "aesthetic photo",
      "jolin"
    ),
    new ImageObject(
      "src/components/images/2.jpg",
      "title",
      "2023",
      "aesthetic photo",
      "jolin"
    ),
    new ImageObject(
      "src/components/images/3.jpg",
      "title",
      "2023",
      "aesthetic photo",
      "jolin"
    ),
    new ImageObject(
      "src/components/images/4.jpg",
      "title",
      "2023",
      "aesthetic photo",
      "jolin"
    ),
    new ImageObject(
      "src/components/images/5.jpg",
      "title",
      "2023",
      "aesthetic photo",
      "jolin"
    ),
    new ImageObject(
      "src/components/images/5.jpg",
      "title",
      "2023",
      "aesthetic photo",
      "jolin"
    ),
    new ImageObject(
      "src/components/images/5.jpg",
      "title",
      "2023",
      "aesthetic photo",
      "jolin"
    ),
    new ImageObject(
      "src/components/images/5.jpg",
      "title",
      "2023",
      "aesthetic photo",
      "jolin"
    ),
    new ImageObject(
      "src/components/images/5.jpg",
      "title",
      "2023",
      "aesthetic photo",
      "jolin"
    ),
    new ImageObject(
      "src/components/images/5.jpg",
      "title",
      "2023",
      "aesthetic photo",
      "jolin"
    ),
  ];

  function openPopup(image) {
    if (image) {
      setImageSelected(image);
    } else {
      setImageSelected(null);
    }
    setPopup(true);
  }

  function closePopup() {
    setPopup(false);
  }

  // initializing the first row
  let firstRow = [];
  if (images.length > 2) {
    firstRow.push(images[0]);
    firstRow.push(images[1]);
    images = images.slice(2);
  } else {
    firstRow = images;
  }

  // initializing the second row
  let rows = [];
  for (let i = 0; i <= images.length / 3; i++) {
    const row = [];
    for (let j = 0; j < 3; j++) {
      if (i * 3 + j >= images.length) {
        break;
      }
      row.push(images[i * 3 + j]);
    }
    rows.push(row);
  }

  return (
    <>
      <Header />
      <Title />

      {/* the first row */}
      <div className="row">
        <Upload onAddPhoto={openPopup} />
        <Row images={firstRow} handleOpen={openPopup} />
      </div>

      {/* all following rows */}
      {rows.map((row, i) => (
        <div className="row" key={i}>
          <Row images={row} handleOpen={openPopup} />
        </div>
      ))}

      {popup && <Popup image={imageSelected} handleClose={closePopup} />}

      <Foot />
    </>
  );
}
export default App;
