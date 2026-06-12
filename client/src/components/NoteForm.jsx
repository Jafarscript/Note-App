

const NoteForm = ({formData, handleChange, handleSubmit, loading}) => (
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
        disabled={loading}
        style={{ fontFamily: "'Syne', sans-serif" }}
        className="w-full bg-[#c8f5a0] hover:bg-[#b5ef88] text-[#0e0e10] font-medium text-sm rounded-lg py-2.5 cursor-pointer transition-colors"
      >
        {loading ? "Adding" :"+ Add note"}
      </button>
    </form>
  );

export default NoteForm