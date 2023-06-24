import { useState } from "react";
import "./Popup.css";

function Popup({ handleClose }) {
  const [image, setImage] = useState(null);

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
              <input type="text"></input>
              <label>Date</label>
              <input type="text"></input>
              <label>Description</label>
              <input type="text" id="description"></input>
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
