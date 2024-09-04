const monogodb=require("mongodb")
const mongoClient=monogodb.MongoClient
const connectionUrl='mongodb://localhost:27017'
const dbname="proj1"
mongoClient.connect(connectionUrl,(error,res)=>{
    if(error)
    {
        return console.log("error has occured")
    }
    console.log("All pref")
    const db=res.db(dbname)
    db.collection('Customer').insertOne(
        {
            name:'mustafa',
            age:23
        },(error,data)=>{
            if(error){
                console.log('unable to insert data')
            }
            console.log(data.insertedId)
        }
    )
    db.collection('user').insertMany([{
        name:"ahmed",
        age:20
    },
    {
        name:"mustafa",
        age:23
    },
    {
        name:"menna",
        age:23
    },
    {
        name:"mayar",
        age:25
    },
    {
        name:"romisaa",
        age:21
    },
    {
        name:"anas",
        age:8
    },
    ],
    (error,data)=>{
        if(error){
            console.log('unable to insert data')
        }else{
            console.log(data.insertedCount)
        }

    }
    )
    db.collection('user').findOne({_id:monogodb.ObjectId("66d88ea381fc4745230ae465")},(error,user)=>{
        if(error){
            console.log(error)
        }else{
            user.name='Ibrahim'
            user.age=13
            console.log(user)
            
        }
    })
    db.collection('user').find({age:23}).toArray((error,users)=>{
        if(error||users.length==0){
            return console.log("Can't reach to users")
        }
        users.map((e)=>{
            console.log(e.name)
        })
    })
    db.collection('user').find({name:'mustafa'}).toArray((error,users)=>{
        if(error||users.length==0){
            return console.log("Can't reach to users")
        }
       console.log(users)
    })
    db.collection('user').findOneAndDelete({age:20},(error,user)=>{
        console.log(user)
    })
    db.collection('user').count((error,users)=>{
        if(error||users.length==0){
            return console.log("Can't reach to users")
        }
       console.log(users)
    })
})