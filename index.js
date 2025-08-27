const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Enable CORS and JSON parsing
app.use(cors());
app.use(express.json()); // <-- Add this line to parse JSON bodies

// Sample books data
const books = [
  { id: 1, title: 'Book One', author: 'Author A' },
  { id: 2, title: 'Book Two', author: 'Author B' },
];

// GET /books endpoint
app.get('/books', (req, res) => {
  res.json(books);
});

// POST /books endpoint
app.post('/books', (req, res) => {
  const { title, author, year } = req.body;
  const newBook = {
    id: books.length ? books[books.length - 1].id + 1 : 1,
    title,
    author,
    year
  };
  books.push(newBook);
  res.status(201).json(newBook);
});
app.put('/books/:id', (req, res) => {
  const { id } = req.params;
  const { title, author, year } = req.body;
  const book = books.find(b => b.id === Number(id));
  if (book) {
    book.title = title;
    book.author = author;
    book.year = year;
    res.json(book);
  } else {
    res.status(404).json({ message: "Book not found" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});