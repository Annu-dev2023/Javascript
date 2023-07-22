try {
    console.log('before the error');
    const age = 12;
    console.log(age);
}
catch(err) //here err is the object
{ 
    console.log(err.name);
} 
finally {
    console.log('Hehe Finally');
}