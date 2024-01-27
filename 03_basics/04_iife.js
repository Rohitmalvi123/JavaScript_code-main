// Immediately Invoked Function Expression (IIFE)

(function chai(){
    console.log(`DB CONNECTED`);
})(); // run to end semicolan

( () => {
    console.log(`DB CONNECTED TWO`);
}) ();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
}) ("rohit")

