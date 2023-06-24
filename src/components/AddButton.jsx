import propTypes from "prop-types";
import "./AddButton.css";

function AddButton({ onAddPhoto }) {
  return <button onClick={onAddPhoto} className="photoUpload"> Add Photo </button>;
}

export default AddButton;

AddButton.propTypes = {
  onAddPhoto: propTypes.func.isRequired,
};
