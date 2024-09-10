import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { books } from './books';
import Book from './Book';

const BookList = () => {
  return (
    <section className="booklist">
      {books.map((book) => {
        const { id } = book;
        return <Book {...book} key={id} />;
      })}
    </section>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList />);
