import express from "express";
const router = express.Router();

let studentList = {
  1: {
    id: "1",
    name: "Madhav",
    course: ["English", "Maths"],
  },
  12: {
    id: "12",
    name: "Anish",
    course: ["English", "Maths", "Science"],
  },
  13: {
    id: "13",
    name: "Ram",
    course: ["English", "German"],
  },
  14: {
    id: "14",
    name: "Ajay",
    course: ["Spanish", "Maths"],
  },
  23: {
    id: "23",
    name: "Akshat",
    course: ["Spanish", "German"],
  },
  21: {
    id: "21",
    name: "Vivek",
    course: ["English", "German"],
  },
  32: {
    id: "32",
    name: "Yasir",
    course: ["Science", "German", "Maths"],
  },
  "09": {
    id: "09",
    name: "Kunal",
    course: ["Spanish", "Science", "English"],
  },
};

router.get("/", (req, res) => {
  res.send(studentList);
  res.status(200).send("done");
});
//update method
router.put("/:id", (req, res) => {
  const studId = req.params.id;
  const data = req.body;

  studentList[studId] = data;

  res.status(200).send(studentList);
});

export default router;
