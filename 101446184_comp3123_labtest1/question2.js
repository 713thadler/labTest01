/*  Question 2: Promises
● Given the script file callbacks.js, write a script that does the following:
o Create a method resolvedPromise that is similar to
delayedSuccess and resolves a message after a timeout of 500ms.
o Create a method rejectedPromise that is similar to
delayedException and rejects an error message after a timeout of
500ms.
o Call both promises separately and handle the resolved and reject
results and then output to the console  */

const resolvedPromise = ()=> {
    return new Promise ((resolve,reject) => {
        setTimeout(()=> {
            resolve({message:'Delayed Success'})
        },500

        );

    }

)
}
resolvedPromise().then(result=>console.log(result)).catch(err=> console.error());

const rejectedPromise = ()=> {
    return new Promise ((resolve,reject) => {
        setTimeout(()=> {
            reject(new Error('Delayed Reject'));},500);});};
     


rejectedPromise().then(result=>console.log(result)).catch(err=> console.error(err.message));
