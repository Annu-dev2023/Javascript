const ticket = new Promise (function(resolve, reject){
    const isboarded = true;
    if(isboarded){
        resolve('You will be flying')
    }
    else{
        reject("You will'not be flying")
    }
})
ticket
.then((data) => {
    console.log('Wohoooo', data);
})
.catch((data)=>{
    console.log('Oh no',data);
})