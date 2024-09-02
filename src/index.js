import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const title = 'Hillbilly Elegy: A Memoir of a Family and Culture in Crisis';
const author = 'J. D. Vance';
const image = './images/book-1.jpg';

const BookList = () => {
  return (
    <section className="booklist">
      <Book author={author} title={title} image={image} />
      <Book author={author} title={title} image={image} />
      <Book author={author} title={title} image={image} />
      <Book author={author} title={title} image={image} />
    </section>
  );
};

const Book = (props) => {
  console.log(props);
  return (
    <article className="book">
      <img src={props.image} alt={props.title} />
      <h2>{props.title}</h2>
      <h4>{props.author}</h4>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList />);
