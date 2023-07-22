function myfunction(){
    console.log("I was being clicked heheheheh");
}
const mymoouseover = () => {
    console.log('Mouseoverddddddd!!!!');
}
const movingmouse = () => {
    console.log('moved');
}
const keypress = () => {
    console.log('key is pressed');
}
/////////--------------------------------Event listener------------------------------/////////

const box4 = document.getElementById('box-4')
box4.addEventListener('click', () =>{
    console.log("I'm clicked!!!");
})
box4.addEventListener('mousemove', (e) =>{
    console.log("I'm clicked!!! twice", e.clientX ,e.clientY);
})
const key1 = document.getElementById('nameinput');
nameinput.addEventListener('key',(e) => {
    console.log('key', e.key);
})