import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

export default function Update() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    year: ""
  });

  useEffect(() => {
    // Fetch the book details by ID
    axios.get(`http://localhost:3000/books`)
      .then(res => {
        const book = res.data.find(b => b.id === Number(id));
        if (book) setFormData(book);
      })
      .catch(err => console.error(err));
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:3000/books/${id}`, formData);
      alert("Book updated!");
      navigate("/");
    } catch (error) {
      alert("Failed to update book.");
      console.error(error);
    }
  };

  return (
    <div className="card p-3 shadow">
      <h1>Update Book</h1>
      <form onSubmit={handleSubmit}>
        Title: <input type="text" className="form-control mb-2" value={formData.title}
          onChange={e => setFormData({ ...formData, title: e.target.value })} required /><br />
        Author: <input type="text" className="form-control mb-2" value={formData.author}
          onChange={e => setFormData({ ...formData, author: e.target.value })} required /><br />
        Year: <input type="text" className="form-control mb-2" value={formData.year}
          onChange={e => setFormData({ ...formData, year: e.target.value })} required /><br />
        <button type="submit" className="btn btn-primary">Update</button>
      </form>
    </div>
  );
}