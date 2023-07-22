function getcheese() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const cheese = '🧀';
            resolve (cheese);
        },2000);
    });
}
function makedough(cheese){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            const dough = cheese + "🌕";
            resolve(dough);
        },2000)
    })
}
function getpizza(dough){
    return new Promise((resolve,reject)=>{
        setTimeout (()=>{
            const pizza = dough + '🍕';
            resolve(pizza)
        },2000)
    })
} 

//----------------------------------------------------Async functions--------------------------//
async function orderpizza(){
    const cheese = await getcheese(cheese);
    console.log('Here is your cheese', cheese);

    const dough = await makedough(cheese);
    console.log('Here is your dough', dough);

    const pizza = await getpizza(dough);
    console.log('Here is your pizza', pizza);
}

    orderpizza();

    // getcheese()
// .then((cheese)=> {
//     console.log('Here is your cheese',cheese);
//     return makedough(cheese)
// })
// .then((dough)=>{
//     console.log('Here is your dough',dough);
//     return getpizza(dough)
// })
// .then((pizza)=>{
//     console.log('Here is your pizza',pizza);
// })
