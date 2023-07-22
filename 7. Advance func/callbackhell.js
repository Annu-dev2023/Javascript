// setTimeout(function(){
//     console.log('This will execute later');
// },3000);

//----------------------------------another example------------------------------------------//

    // setTimeout( () => {
    //     const cheese = '🧀';
    //     console.log('Here is your cheese', cheese);
    // },2000);
//----------------------------------real call back hell-------------------------------------//

function getCheese(callback) {
    setTimeout(() => {
        const cheese = '🧀';
        console.log('Here is your cheese', cheese);
        callback(cheese)
    },5000)
}
    getCheese((cheese) => {
        console.log('Got the cheese',cheese);
    })
