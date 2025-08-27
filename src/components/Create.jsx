import React, { useState } from "react";
import axios from "axios";

export default function Create() {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    year: ""
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3000/books', formData);
      // Optionally clear form or show success message
      setFormData({ title: "", author: "", year: "" });
      alert("Book added!");
    } catch (error) {
      alert("Failed to add book.");
      console.error(error);
    }
  };

  return (
    <div className="card p-3 shadow">
      <h1>Add new Book</h1>
      <form onSubmit={handleSubmit}>
        Title: <input type="text" className="form-control mb-2" value={formData.title}
          onChange={e => setFormData({ ...formData, title: e.target.value })} required /><br />
        Author: <input type="text" className="form-control mb-2" value={formData.author}
          onChange={e => setFormData({ ...formData, author: e.target.value })} required /><br />
        Year: <input type="text" className="form-control mb-2" value={formData.year}
          onChange={e => setFormData({ ...formData, year: e.target.value })} required /><br />
        <button type="submit" className="btn btn-primary">Add</button>
      </form>
    </div>
  );
}