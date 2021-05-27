// let studentList={
//     "studentList":[
//         {
//             "id":1,
//             "name":"madhav",
//             "course":[
//                 {"id":1, "value":"English"},
//                 {"id":2, "value":"Maths"},
//                 {"id":4, "value":"German"}

//             ]
//             }
// ]
// }
exports.list = (req, res) => {
  res.send(studentList);
};
