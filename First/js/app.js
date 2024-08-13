const fs=require("fs")
const yargs=require("yargs")
const data=require("./data")
/////////////add command/////////
yargs.command({
    command:"add",
    describe:"To add a new person",
    builder:{
        id:{
            describe:"id of person",
            demandOption:true
        },
        fname:{
            describe:"First name of person",
            demandOption:true,
            type:"string"
        },
        lname:{
            describe:"Last name of person",
            demandOption:true,
            type:"string"
        },
        age:{
            describe:"Age of person",
            demandOption:true,
        },
        city:{
            describe:"Location of person",
            demandOption:true,
            type:"string"
        }
    },
    handler:(x)=>{
        data.add(x.id,x.fname,x.lname,x.age,x.city)
    }
})
///////////delete///////////////
yargs.command({
    command:"delete",
    describe:"To delete a  person",
    builder:{
        id:{
            describe:"id of person",
            demandOption:true
        }
    },
    handler:(x)=>{
        data.delet(x.id)
    }
})
///////////read///////////////
yargs.command({
    command:"read",
    describe:"To read a person",
    builder:{
        id:{
            describe:"id of person",
            demandOption:true
        }
    },
    handler:(x)=>{
        data.read(x.id)
    }
})
///////////List///////////////
yargs.command({
    command:"list",
    describe:"To list all Data",
    handler:()=>{
        data.list()
    }
})
yargs.parse()