import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const firstBook = {
  title: 'Hillbilly Elegy: A Memoir of a Family and Culture in Crisis',
  author: 'J. D. Vance',
  image: './images/book-1.jpg'
}

const secondBook = {
  title: 'Linux for Absolute Beginners',
  author: 'Andrew Warner',
  image: 'https://c.media-amazon.com/images/I/416brJM-J4L._SY445_SX342_.jpg'
}

const BookList = () => {
  return (
    <section className="booklist">
      <Book
        title={firstBook.title}
        author={firstBook.author}
        image={firstBook.image}
      />
      <Book
        title={secondBook.title}
        author={secondBook.author}
        image={secondBook.image}
      />
      <Book
        title={firstBook.title}
        author={firstBook.author}
        image={firstBook.image}
      />
      <Book
        title={secondBook.title}
        author={secondBook.author}
        image={secondBook.image}
      />
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
