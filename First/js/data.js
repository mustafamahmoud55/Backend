const fs=require("fs")
const { listenerCount } = require("process")
/////////add/////////
const add=(id,fname,lname,age,city)=>{
   const allData= load()
   const duplicated=allData.filter((obj)=>{
    return obj.id===id
   })
   if(duplicated.length == 0)
   {
    allData.push({
        id:id,
        fname:fname,
        lname:lname,
        age:age,
        city:city
    })
    save(allData)
   }else
   {
    console.log("Error Duplicated ID")
   }
}
///////////load/////
const load=()=>{
    try{
        const loadedData=fs.readFileSync("data1.json").toString()
        return JSON.parse(loadedData)
    }
    catch{
        return []
    }
}
////////////save/////
const save=(file)=>{
   const saveData= JSON.stringify(file)
   fs.writeFileSync("data1.json",saveData)
}
///////////delet/////
const delet=(id)=>{
    const allData=load()
    const returnData=allData.filter((obj)=>{
        return obj.id !==id
    })
    save(returnData)
}
/////////read/////////
const read=(id)=>{
    const allData=load()
    const readData=allData.find((obj)=>{
        return obj.id ===id
    })
    if(readData)
   { console.log(readData)}
    else{
        console.log("ID not founded")
    }
}
////////List/////////
list=()=>{
    const allData=load()
    allData.forEach(element => {
        console.log("First Name :",element.fname,", Age :",element.age,", City :",element.city)
    });
}
module.exports=({
    add,
    delet,
    read,
    list
})