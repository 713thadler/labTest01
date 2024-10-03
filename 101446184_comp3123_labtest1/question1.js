/* Q 1 :  Create a script with a function named lowerCaseWords that takes a
mixed array as input.
The function will do the following.
o return a promise that is resolved or rejected
o filter the non-strings and lower case the remaining words */


function lowerCaseWords(array) {
    return new Promise((resolve, reject) => {
        if(!Array.isArray(array)){
            reject(new Error('function only takes arrray'));
    
        } else {
            const arrayLowerCase = array.filter(item=>typeof item == 'string' )
            .map(item=> item.toLowerCase());
            resolve(arrayLowerCase);
        }
    })
}
lowerCaseWords(['Array', 33 , 'Sad' , 'happy']).then(result=>console.log(result)).catch(error=>console.error(error));