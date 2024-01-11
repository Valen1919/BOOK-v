// components/tienda/Book.jsx
import './Tienda.css';

const Book = ({ title, author, price, image }) => {
  return (
    <div className="book">
      <img src={image} alt={`${title} cover`} />
      <div className="book-info">
        <h3>{title}</h3>
        <p>{author}</p>
        <p>${price}</p>
        <button>Add to Cart</button>
      </div>
    </div>
  );
};

export default Book;