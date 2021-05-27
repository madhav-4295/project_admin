import express from "express"
const router = express.Router()


let studentList={
        "1":{
            "id":"1",
            "name":"madhav",
            "course":["English", "Maths"
                // {"id":1, "value":"English"},
                // {"id":2, "value":"Maths"}


            ] 
        }
        ,
        "12":{
            "id":"12",
            "name":"ragh",
            "course":["English", "Maths"
                // {"id":1, "value":"English"},
                // {"id":2, "value":"Maths"}

            ]        
        },
}

//  list = require("../controller/index")

//all routes in here are starting with /studentList
router.get('/',
(req,res)=>{
    console.log("get method--->studentlist-->",studentList)
     res.send( studentList)
     res.status(200).send("done")
    // res.render(index)
 }
)
//update method
router.put('/:id',(req,res)=>{
    const studId= req.params.id
    const data = req.body
    // console.log(data,"data")

    studentList[studId] = data

// const studFound = studentList.studentList.map((user)=>{
//     if(user.id===parseInt(studId)){
//         console.log("matched")
//         return user[user.id]={...data}
//     }
//     else return user
    
// })
console.log(studentList.studentList,"new studentlist")
res.status(200).send(studentList)

    // res.status(404).send("something went wrong")


    
    //  res.send(data)
    
})



export default router