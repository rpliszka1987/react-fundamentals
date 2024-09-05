import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const books = [
  {
    title: 'Hillbilly Elegy: A Memoir of a Family and Culture in Crisis',
    author: 'J. D. Vance',
    image: './images/book-1.jpg',
    id: 1,
  },

  {
    title: 'Linux for Absolute Beginners',
    author: 'Andrew Warner',
    image:
      'https://c.media-amazon.com/images/I/71gvbSzk+IL._UX300__PJku-sticker-v8,TopRight,0,-50_AC_UL254_SR254,254_.jpg',
    id: 2,
  },

  {
    title: 'Atomic Habits',
    author: 'James Clear',
    image: 'https://c.media-amazon.com/images/I/81YkqyaFVEL._SY466_.jpg',
    id: 3,
  },
];

const BookList = () => {
  return (
    <section className="booklist">
      <EventExamples />
      {books.map((book) => {
        const { id } = book;
        return <Book {...book} key={id} />;
      })}
    </section>
  );
};

const EventExamples = () => {
  const handleFormInput = () => {
    console.log('handle form input');
  };

  const handleButtonClick = () => {
    alert('form submitted');
  };
  return (
    <section>
      <form>
        <h2>Typical Form</h2>
        <input type="text" name="example" onChange={handleFormInput} stype={{ margin: '1rem 0' }} />
      </form>
      <button onClick={handleButtonClick}>Click Me</button>
    </section>
  );
};

const Book = (props) => {
  const { image, title, author } = props;
  console.log(props);
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
