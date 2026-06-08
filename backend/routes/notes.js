import express from "express";
import Notes from "../model/Notes.js";
import auth from "../middleware/auth.js";

const router = express.Router();

router.get("/", auth, async (req, res) => {
  try {
    const notes = await Notes.find({ owner: req.user.id });
    res.status(201).json(notes);
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
});

router.post("/", auth, async (req, res) => {
  try {
    const notes = await Notes.create({ ...req.body, owner: req.user.id });
    res.status(201).json(notes);
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
});

router.delete("/:id", auth, async (req, res) => {
  try {
    const note = await Notes.findById(req.params.id);
    if (!note) return res.status(404).send("Note not found");
    if (note.owner.toString() !== req.user.id)
      return res.status(403).json({ error: "Not allowed" });
    await note.deleteOne();
    res.status(200).send("Deleted successfully");
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
});

export default router;
