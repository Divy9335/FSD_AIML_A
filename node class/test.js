

// function login(cb){
//     setTimeout(()=>{
//         console.log("Loged in")
//         cb();
//     },2000)

// }
// function getData(cb){
//     setTimeout(()=>{
//         console.log("Got data");
//         cb();
//     },8000)
    
// }
// function calculateData(cb){
//     setTimeout(()=>{
//         console.log("Calculated data");
//         cb();
//     },3000)
    
// }
// function sendSMS(cb){
//     setTimeout(()=>{
//         console.log("SMS Sent");
//         cb();
//     },1000)
    
// }
// function logedOut(cb){
//     setTimeout(()=>{
//         console.log("Loged out");
//     },1000)  
// }
// login(()=>{
//     getData(()=>{
//         calculateData(()=>{
//             sendSMS(()=>{
//                 logedOut();
//             })
//         })
//     })
// })


// // synchronous async and await

// function login() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log("Logged in");
//             resolve();
//         }, 2000);
//     });
// }

// function getData() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log("Got data");
//             resolve();
//         }, 8000);
//     });
// }

// function calculateData() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log("Calculated data");
//             resolve();
//         }, 3000);
//     });
// }

// function sendSMS() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log("SMS Sent");
//             resolve();
//         }, 1000);
//     });
// }

// function logedOut() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log("Logged out");
//             resolve();
//         }, 1000);
//     });
// }

// async function main() {
//     await login();
//     await getData();
//     await calculateData();
//     await sendSMS();
//     await logedOut();
// }
// main();



function login() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Logged in");
            resolve();
        }, 2000);
    });
}

function getData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Got data");
            resolve();
        }, 8000);
    });
}

function calculateData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Calculated data");
            resolve();
        }, 3000);
    });
}

function sendSMS() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("SMS Sent");
            resolve();
        }, 1000);
    });
}

function logedOut() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Logged out");
            resolve();
        }, 1000);
    });
}

login().then(getData).then(calculateData).then(sendSMS).then(logedOut).catch((err)=>{
    console.log('Error:'+err);
})


