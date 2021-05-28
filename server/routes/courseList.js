import express from "express";
const router = express.Router();

let courseList = {
  courseList: [
    {
      id: 1,
      value: "English",
    },
    {
      id: 2,
      value: "Maths",
    },
    {
      id: 3,
      value: "Science",
    },
    {
      id: 4,
      value: "German",
    },
    {
      id: 5,
      value: "Spanish",
    },
  ],
};
router.get("/", (req, res) => {
  res.send(courseList);
});

export default router;
