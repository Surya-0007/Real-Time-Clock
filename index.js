
setInterval(()=>{
    let date = new Date()
    hours = date.getHours()
    minutes = date.getMinutes()
    seconds = date.getSeconds()
    
    let time = `${hours}:${minutes}:${seconds}`
    
    let element = document.getElementById("time")
        element.innerHTML = time
    
}, 1000)