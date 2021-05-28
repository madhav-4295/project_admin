import express from "express"
const router = express.Router()


let studentList={
        "1":{
            "id":"1",
            "name":"madhav",
            "course":["English", "Maths"
                

            ] 
        }
        ,
        "12":{
            "id":"12",
            "name":"ragh",
            "course":["English", "Maths"
                
            ]        
        },
        "13":{
            "id":"13",
            "name":"ram",
            "course":["English", "Maths"
                
            ]        
        },"14":{
            "id":"14",
            "name":"Ajay",
            "course":["English", "Maths"
                
            ]        
        },"23":{
            "id":"23",
            "name":"Akshat",
            "course":["English", "Maths"
                
            ]        
        },"21":{
            "id":"21",
            "name":"Vivek",
            "course":["English", "Maths"
                
            ]        
        },"32":{
            "id":"32",
            "name":"Yasir",
            "course":["English", "Maths"
                
            ]        
        },
        "09":{
            "id":"09",
            "name":"Kunal",
            "course":["English", "Maths"
                
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