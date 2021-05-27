import express from "express"
const router = express.Router()

let courseList={
    "courseList":[
        {
            "id":1,
            "value":"English"

        },
        {
            "id":2,
            "value":"Maths"

        },
        {
            "id":3,
            "value":"Science"

        },
        {
            "id":4,
            "value":"German"

        },
        {
            "id":5,
            "value":"Spanish"

        }
    ]
}
//all routes in here are starting with /studentList
router.get('/',(req,res)=>{
    res.send(courseList)
})
router.get('/',
(req,res)=>{
    console.log("get method--->studentlist-->",studentList)
    res.send( studentList)
    // res.render(index)
 }
)

export default router