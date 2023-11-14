import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Track = () => {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const { username } = useParams();

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    try {
      const response = await axios.get(`https://vaultbackend.onrender.com/api/notes/${username}`);
      setNotes(response.data);
    } catch (error) {
      console.log(error.response.data);
    }
  };

  const handleAddNote = async () => {
    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("content", content);
      formData.append("username", username);

      await axios.post(`https://vaultbackend.onrender.com/api/notes`, formData);

      console.log("Note successfully posted");

      setTitle("");
      setContent("");

      fetchNotes();
    } catch (error) {
      console.log(error.response.data);
    }
  };

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div style={{ width: "200px", backgroundColor: "white", padding: "20px", borderRadius: "8px", color: "rgb(102, 102, 241)" }}>
          <h2>Add Note</h2>
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            style={{ marginBottom: "10px", padding: "10px", borderRadius: "4px", width: "100%" }}
          />
          <textarea
            placeholder="Content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            style={{
              marginBottom: "10px",
              padding: "10px",
              borderRadius: "4px",
              width: "100%",
              resize: "none",
            }}
          />
          <button
            onClick={handleAddNote}
            style={{
              backgroundColor: "rgb(102, 102, 241)",
              color: "white",
              padding: "10px",
              borderRadius: "4px",
              border: "none",
              cursor: "pointer",
              width: "100%",
            }}
          >
            Add Note
          </button>
        </div>
      </div>

      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", marginTop: "20px" }}>
        {notes.map((note, index) => (
          <div
            key={note._id}
            style={{
              backgroundColor: "white",
              width: "calc(25% - 20px)",
              padding: "20px",
              borderRadius: "8px",
              margin: "10px",
              boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
              transition: "box-shadow 0.3s ease",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.target.style.boxShadow = "0px 4px 8px rgba(0, 0, 0, 0.2)";
            }}
            onMouseLeave={(e) => {
              e.target.style.boxShadow = "0px 2px 4px rgba(0, 0, 0, 0.1)";
            }}
          >
            <h3>{note.title}</h3>
            <p>{note.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Track;
