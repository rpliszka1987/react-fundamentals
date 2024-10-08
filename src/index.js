import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { books } from './books';
import Book from './Book';

const BookList = () => {
  return (
    <>
    <h1 className='pageTitle'>Amazon Best Seller List</h1>
      <section className="booklist">
        {books.map((book, index) => {
          const { id } = book;
          return <Book {...book} key={id} number={index} />;
        })}
      </section>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList />);
