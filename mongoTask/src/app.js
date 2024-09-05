const mongodb=require('mongodb')
const mongoClient=mongodb.MongoClient
const connectionUrl="mongodb://localhost:27017"
const dbname='task1'
mongoClient.connect(connectionUrl,(error,res)=>{
    if(error)
    {
       return console.log("can't connect with this url")
    }
    const db=res.db(dbname)

    ///////////////////////////////Insert One/////////////////////////////////
    db.collection('user').insertOne({
        name:'mustafa',
        age:23
    })
    db.collection('user').insertOne({
        name:'menna',
        age:23
    })
    ///////////////////////////////Insert Many/////////////////////////////////
    db.collection('user').insertMany(
        [
            {name:'romisaa',
            age:23},
            {name:'anas',
            age:23},
            {name:'mohamed',
            age:23},
            {name:'ahmed',
            age:27},
            {name:'gamal',
            age:27},
            {name:'hassan',
            age:27},
            {name:'ibrahim',
            age:27},
            {name:'yousef',
            age:27},
            {name:'mohsen',
            age:23},
            {name:'shady',
            age:23}
        ]
    )
    ///////////////////////////////Find/////////////////////////////////
    db.collection('user').find({age:27}).limit(3).toArray((error,data)=>{
        if(error||data.length==0)
        {
            return console.log('No data Matching')
        }
        console.log(data)
    })
    ///////////////////////////////Update One Name/////////////////////////////////
    db.collection('user').updateOne({_id:mongodb.ObjectId("66d9cf7252a16d1d6783acf8")},{
        $set:{ name:'mahmoud'}
    })
    db.collection('user').updateOne({_id:mongodb.ObjectId("66d9cf7252a16d1d6783acf9")},{
        $set:{ name:'mustafa'}
    })
    db.collection('user').updateOne({_id:mongodb.ObjectId("66d9cf7252a16d1d6783acfa")},{
        $set:{ name:'menna'}
    })
    db.collection('user').updateOne({_id:mongodb.ObjectId("66d9cf7252a16d1d6783acfb")},{
        $set:{ name:'romisaa'}
    })
    ///////////////////////////////Update One age/////////////////////////////////
    db.collection('user').updateOne({_id:mongodb.ObjectId("66d9cf7252a16d1d6783acfd")},{
        $inc:{age:4}
    })
    db.collection('user').updateOne({_id:mongodb.ObjectId("66d9cf7252a16d1d6783acfe")},{
        $inc:{age:4}
    })
    db.collection('user').updateOne({_id:mongodb.ObjectId("66d9cf7252a16d1d6783acff")},{
        $inc:{age:4}
    })
    db.collection('user').updateOne({_id:mongodb.ObjectId("66d9cf7252a16d1d6783ad00")},{
        $inc:{age:4}
    })
    ///////////////////////////////Update Many/////////////////////////////////
    db.collection('user').updateMany({},{
        $inc:{ age:10}
    })
    ///////////////////////////////Delete Many/////////////////////////////////
    db.collection('user').deleteMany({age:41}).then((data)=>console.log(data.deletedCount))
})
