function addsqs(a, b) {

    const sa = square(a);
    const sb = square(b);

    function square(num){
    return num*num;
    }
    return sa + sb ;
}
console.log(addsqs(2,3));
