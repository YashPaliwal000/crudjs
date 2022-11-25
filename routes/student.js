const e = require("express");
const express = require("express");
const router = express.Router();
const Student = require("../model/studentEntity");
router.get("/", async (req, res) => {
  try {
    const st = await Student.find();
    res.json(st);
  } catch (error) {
    res.send("error " + error);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const st = await Student.findById(req.params.id);
    res.json(st);
  } catch (error) {
    res.send("error " + error);
  }
});

router.post("/", async (req, res) => {
  const st = new Student({
    name: req.body.name,
    course: req.body.course,
  });

  try {
    const a = await st.save();
    res.json(a);
  } catch (error) {
    res.send("error " + error);
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const st = await Student.findById(req.params.id);
    st.course = req.body.course;
    const a = await st.save();
    res.json(a);
  } catch (error) {
    res.send("error " + error);
  }
});

module.exports = router;
