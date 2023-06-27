import propTypes from "prop-types";

function Upload({ onAddPhoto }) {
  return (
    <>
      <button
        onClick={() => {
          onAddPhoto(null);
        }}
        className="add"
        id="gallery-upload"
      />
    </>
  );
}

export default Upload;

Upload.propTypes = {
  onAddPhoto: propTypes.func.isRequired,
};
