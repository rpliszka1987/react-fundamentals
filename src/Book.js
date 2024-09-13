const Book = (props) => {
  const { image, title, author, id } = props;

  return (
    <article className="book">
      <h1>#{id}</h1>
      <img src={image} alt={title} />
      <h2>{title}</h2>

      <h4>{author}</h4>
    </article>
  );
};

export default Book;
