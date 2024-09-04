let form=document.getElementById('form1')
form.addEventListener('submit',(e)=>{
    e.preventDefault()
    weatherF()
    form.reset()
})

const errorF=document.getElementById('error')
const forecastF=document.getElementById('forecast')
const locationF=document.getElementById('location')
let weatherF= async() =>{
    try {
        const address=document.getElementById('input').value
        const url=await fetch('http://localhost:3000/weather?country='+address)
        const data=await url.json()
        if(data.error){
            errorF.innerText="Error : "+data.error
            forecastF.innerText=""
            locationF.innerText=""
        }
        else{   
            errorF.innerText=""
            forecastF.innerText="Forecast : "+data.forecast
            locationF.innerText="city : "+address
        }
    } catch (error) {
        
    }

}