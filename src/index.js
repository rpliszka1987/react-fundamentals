import React from 'react';
import ReactDOM from 'react-dom/client';

const BookList = () => {
  return (
    <section>
      <Book />
      <Book />
    </section>
  );
};

const Book = () => {
  return (
    <article>
      <Image />
      <Title />
      <Author />
    </article>
  );
};

const Image = () => (
  <img src="https://images-na.ssl-images-amazon.com/images/I/81ytGlIkLoL._AC_UL600_SR600,400_.jpg" />
);
const Title = () => (
  <h2>Hillbilly Elegy: A Memoir of a Family and Culture in Crisis</h2>
);
const Author = () => {
  return <h4>J. D. Vance</h4>;
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList />);
