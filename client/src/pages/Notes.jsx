import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";

const DOT_COLORS = ["#c8f5a0", "#7fa8f5", "#f5a07f", "#c07ff5", "#f5d97f", "#7ff5e8"];

const Notes = () => {
  const navigate = useNavigate();
  const [notes, setNotes] = useState([]);
  const [formData, setFormData] = useState({ title: "", content: "" });

  const API = import.meta.env.VITE_API_URL


  useEffect(() => {
    axios
      .get(`${API}/notes`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((response) => setNotes(response.data))
      .catch((error) => console.log(error.message));
  }, [API]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`${API}/notes`, formData, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((response) => {
        setNotes([...notes, response.data]);
        setFormData({ title: "", content: "" });
      })
      .catch((error) => console.log(error.message));
  };

  const handleDelete = (id) => {
    axios
      .delete(`${API}/notes/${id}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then(() => setNotes(notes.filter((note) => note._id !== id)))
      .catch((error) => console.log(error.message));
  };

  const handleLogOut = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif" }} className="min-h-screen bg-[#0e0e10] flex flex-col">

      {/* Navbar */}
      <nav className="bg-[#17171a] border-b border-[#2a2a2f] px-6 h-14 flex items-center justify-between shrink-0">
        <div style={{ fontFamily: "'Syne', sans-serif" }} className="flex items-center gap-2 text-[#c8f5a0] text-lg font-bold tracking-tight">
          <span className="w-2 h-2 rounded-full bg-[#c8f5a0] inline-block"></span>
          NoteSpace
        </div>
        <button
          onClick={handleLogOut}
          className="border border-[#2e2e36] text-[#8a8a96] hover:border-red-500 hover:text-red-400 text-sm px-4 py-1.5 rounded-lg cursor-pointer transition-all bg-transparent"
        >
          Sign out
        </button>
      </nav>

      {/* Body */}
      <div className="flex flex-1 overflow-hidden">

        {/* Sidebar */}
        <aside className="w-72 shrink-0 bg-[#131316] border-r border-[#2a2a2f] p-6 flex flex-col gap-4">
          <p className="text-[11px] font-medium text-[#5a5a65] uppercase tracking-widest">New note</p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div>
              <label className="block text-[11px] font-medium text-[#6b6b75] mb-1.5">Title</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                placeholder="Note title..."
                onChange={handleChange}
                required
                className="w-full bg-[#1a1a1e] border border-[#2e2e36] rounded-lg px-3 py-2.5 text-sm text-[#f0f0f2] placeholder-[#3e3e48] outline-none focus:border-[#c8f5a0] transition-colors"
              />
            </div>

            <div>
              <label className="block text-[11px] font-medium text-[#6b6b75] mb-1.5">Content</label>
              <textarea
                name="content"
                value={formData.content}
                placeholder="Write your note here..."
                onChange={handleChange}
                required
                rows={5}
                className="w-full bg-[#1a1a1e] border border-[#2e2e36] rounded-lg px-3 py-2.5 text-sm text-[#f0f0f2] placeholder-[#3e3e48] outline-none focus:border-[#c8f5a0] transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              style={{ fontFamily: "'Syne', sans-serif" }}
              className="w-full bg-[#c8f5a0] hover:bg-[#b5ef88] text-[#0e0e10] font-medium text-sm rounded-lg py-2.5 cursor-pointer transition-colors"
            >
              + Add note
            </button>
          </form>
        </aside>

        {/* Main */}
        <main className="flex-1 p-6 overflow-y-auto">
          <div className="flex items-baseline justify-between mb-5">
            <h1 style={{ fontFamily: "'Syne', sans-serif" }} className="text-xl font-semibold text-[#f0f0f2]">
              My notes
            </h1>
            <span className="text-sm text-[#5a5a65]">{notes.length} {notes.length === 1 ? "note" : "notes"}</span>
          </div>

          {notes.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-64 text-center">
              <p className="text-[#3e3e48] text-sm">No notes yet. Add your first one.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {notes.map((note, index) => (
                <div
                  key={note._id}
                  className="bg-[#17171a] border border-[#2a2a2f] hover:border-[#3e3e48] rounded-xl p-4 flex flex-col gap-2 transition-colors relative"
                >
                  {/* Dot */}
                  <span
                    className="w-1.5 h-1.5 rounded-full inline-block"
                    style={{ backgroundColor: DOT_COLORS[index % DOT_COLORS.length] }}
                  ></span>

                  {/* Delete */}
                  <button
                    onClick={() => handleDelete(note._id)}
                    className="absolute top-3 right-3 text-[#3e3e48] hover:text-red-400 transition-colors bg-transparent border-none cursor-pointer p-1"
                    aria-label="Delete note"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/><path d="M10 11v6"/><path d="M14 11v6"/><path d="M9 6V4h6v2"/>
                    </svg>
                  </button>

                  {/* Content */}
                  <h2 style={{ fontFamily: "'Syne', sans-serif" }} className="text-sm font-semibold text-[#e8e8ec] pr-6 leading-snug">
                    {note.title}
                  </h2>
                  <p className="text-xs text-[#6b6b75] leading-relaxed line-clamp-4">{note.content}</p>

                  {/* Date */}
                  {note.createdAt && (
                    <p className="text-[11px] text-[#44444e] mt-auto pt-2">
                      {new Date(note.createdAt).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })}
                    </p>
                  )}
                </div>
              ))}
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Notes;