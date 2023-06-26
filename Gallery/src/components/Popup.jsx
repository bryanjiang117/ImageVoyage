import { useState } from "react";
import "./Popup.css";

function Popup({ handleClose }) {
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState(null);
  const [date, setDate] = useState(null);
  const [desc, setDesc] = useState(null);

  const handleSave = () => {
    const formData = new FormData();
    formData.append("image", image);
    handleClose();
  };

  const handleDelete = () => {
    handleClose();
  };

  function handleUpload(event) {
    if (event.target.files[0]) {
      setImage(event.target.files[0]);
    }
  }

  function handleTitle(event) {
    setTitle(event.target.value);
  }

  function handleDate(event) {
    setDate(event.target.value);
  }

  function handleDesc(event) {
    setDesc(event.target.value);
  }

  return (
    <>
      <div className="backdrop">
        <div id="popup">
          <div className="container" id="content-container">
            {/* Photo section */}
            <div className="container" id="photo-container">
              {/* Photo uploader */}
              <input id="uploader" type="file" onChange={handleUpload} />

              {/* Custom UI for the photo uploader*/}
              <label for="uploader" class="photo-upload">
                {/* When no photo is uploaded yet */}
                {!image && (
                  <img src="src/assets/upload.svg" id="upload-symbol" />
                )}

                {/*When photo is uploaded, it is displayed*/}
                {image && (
                  <img className="photo" src={URL.createObjectURL(image)} />
                )}
              </label>
            </div>

            <div className="container" id="input-container">
              <label>Title</label>
              <input type="text" onChange={handleTitle}></input>
              <label>Date</label>
              <input type="text" onChange={handleDate}></input>
              <label>Description</label>
              <textarea rows="3" onChange={handleDesc} id="desc"></textarea>
            </div>
          </div>

          {/* Save and delete button section */}
          <div className="container" id="button-container">
            <button onClick={handleSave} id="save">
              Save
            </button>

            <button onClick={handleDelete} id="delete">
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Popup;
