let students = [
    { id: "001", name: "Anish" , sports: "Cricket"},
    { id: "002", name: "Anish" , sports: "Cricket"},
    { id: "003", name: "Anish" , sports: "Cricket"},
    { id: "004", name: "Anish" , sports: "Cricket"},
    { id: "005", name: "Anish" , sports: "Cricket"}
]
// const newArray = students.filter((curValue) => { 
//     if(curValue.id % 2 == 0)return true;   //to check the number is even or not it works with int and string together.
//     else return false;                    //for true it will return the filtered value and for false it will not return anything.
// })
// console.log('Here is your array...');
// console.log(newArray);

// const Names = students.map((curValue) => {
//     return curValue.name;
// })
// console.log(Names);

const Namess = students.map((curValue)=>{
    return `<li>${curValue.name}</li>`
})
console.log(Namess);
//----to make inner html we call container and add the values as List items in the container--///

const div = document.getElementById('container');
div.innerHTML = `<ul>${Namess.join('')}</ul>`
/// To convert above array values in string we use " Join method " ///

/// as for many elements present in it we use " ` this ` "