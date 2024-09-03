import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const books = [
  {
    title: 'Hillbilly Elegy: A Memoir of a Family and Culture in Crisis',
    author: 'J. D. Vance',
    image: './images/book-1.jpg',
  },

  {
    title: 'Linux for Absolute Beginners',
    author: 'Andrew Warner',
    image:
      'https://c.media-amazon.com/images/I/71gvbSzk+IL._UX300__PJku-sticker-v8,TopRight,0,-50_AC_UL254_SR254,254_.jpg',
  },

  {
    title: 'Atomic Habits',
    author: 'James Clear',
    image: 'https://c.media-amazon.com/images/I/81YkqyaFVEL._SY466_.jpg',
  },
];



const BookList = () => {
  return <section className="booklist">
    {books.map((book)=> {
      const {title, author, image} = book;
      return <Book title={title} author={author} image={image}/>
    })}

  </section>;
};

const Book = (props) => {
  const { image, title, author } = props;
  return (
    <article className="book">
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList />);
