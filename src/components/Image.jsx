import "../styles/Image.css";

function Image({ image, name, onClick }) {
  return (
    <div className="image" onClick={onClick}>
      <img src={image} alt="" />
      <p className="name">{name}</p>
    </div>
  );
}

export default Image;
