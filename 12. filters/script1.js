let students = [
    { id: "001", name: "Anish" , sports: "Cricket"},
    { id: "002", name: "Ausa" , sports: "Cricket"},
    { id: "003", name: "Sina" , sports: "Tennis"},
    { id: "004", name: "Tina" , sports: "Football"},
    { id: "005", name: "Dina" , sports: "Basketball"}
]
///-------------to use map and filters together------------------///
const Namess = students
.filter((curValue)=> curValue.sports === "cricket")
.map((curValue) => {
    return `<li>${curValue.name}</li>`;
})
console.log(Namess);
const div = document.getElementById('container');
div.innerHTML = `<ul>${Namess.join('')}</ul>`
