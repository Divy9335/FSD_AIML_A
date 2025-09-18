

function login(cb){
    setTimeout(()=>{
        console.log("Loged in")
        cb();
    },2000)

}
function getData(cb){
    setTimeout(()=>{
        console.log("Got data");
        cb();
    },8000)
    
}
function calculateData(cb){
    setTimeout(()=>{
        console.log("Calculated data");
        cb();
    },3000)
    
}
function sendSMS(cb){
    setTimeout(()=>{
        console.log("SMS Sent");
        cb();
    },1000)
    
}
function logedOut(cb){
    setTimeout(()=>{
        console.log("Loged out");
    },1000)  
}
login(()=>{
    getData(()=>{
        calculateData(()=>{
            sendSMS(()=>{
                logedOut();
            })
        })
    })
})