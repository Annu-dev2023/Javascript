// export function multiply(a,b,c) {
//     return a*b*c;
// }
/// exporting the function by renaming it ///
function multiply(a,b,c){
    return a*b*c;
}
function addition(a,b,c){
    return a+b+c;
}
export{
    multiply as mul,
    addition as add
}